import { projects } from '../src/content/data';

const EMBEDDING_MODEL = '@cf/baai/bge-base-en-v1.5';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const VECTORIZE_INDEX_ID = process.env.VECTORIZE_INDEX_ID;

if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN || !VECTORIZE_INDEX_ID) {
  console.error(
    'Missing required environment variables: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN, VECTORIZE_INDEX_ID'
  );
  process.exit(1);
}

type Lang = 'en' | 'vi';

interface Chunk {
  text: string;
  metadata: { projectId: string; title: string; type: string; url: string; lang: Lang; text: string };
}

function buildChunks(project: (typeof projects)[number]): Chunk[] {
  const chunks: Chunk[] = [];
  const stack = project.tech.join(', ');
  const evidenceUrls = project.evidence.map((e) => e.url).join(' ');
  const langs: Lang[] = ['en'];
  if (project.problemVi && project.solutionVi) {
    langs.push('vi');
  }

  for (const lang of langs) {
    const title = project.title[lang];
    const category = project.category[lang];
    const problem = lang === 'en' ? project.problem : project.problemVi;
    const solution = lang === 'en' ? project.solution : project.solutionVi;

    const text1 = [
      `Title: ${title}`,
      `Category: ${category}`,
      `Stack: ${stack}`,
      `Problem: ${problem}`,
      `Solution: ${solution}`,
    ].join('\n');
    chunks.push({
      text: text1,
      metadata: {
        projectId: project.id,
        title,
        type: 'overview',
        url: project.githubUrl ?? project.github,
        lang,
        text: text1,
      },
    });

    const text2 = [
      `Limitations: ${project.limitations}`,
      `Status: ${project.status}`,
      `Evidence: ${evidenceUrls}`,
    ].join('\n');
    chunks.push({
      text: text2,
      metadata: {
        projectId: project.id,
        title,
        type: 'details',
        url: project.githubUrl ?? project.github,
        lang,
        text: text2,
      },
    });
  }

  return chunks;
}

async function embedText(text: string): Promise<number[] | null> {
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${EMBEDDING_MODEL}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.error(`Embedding request failed: ${data.error?.message || response.statusText}`);
      return null;
    }
    const result = data.result;
    if (result?.vectors && Array.isArray(result.vectors) && result.vectors[0]) {
      return result.vectors[0] as number[];
    }
    if (Array.isArray(result) && result[0]?.embedding) {
      return result[0].embedding as number[];
    }
    if (result?.[0]?.embedding) {
      return result[0].embedding as number[];
    }
    if (result?.data && Array.isArray(result.data) && result.data[0]) {
      return result.data[0] as number[];
    }
    console.error('Unexpected embedding response format:', data);
    return null;
  } catch (err) {
    console.error('Embedding request error:', err);
    return null;
  }
}

export async function embedProjects(): Promise<number> {
  const allChunks: Chunk[] = [];
  for (const project of projects) {
    allChunks.push(...buildChunks(project));
  }

  const vectors: Array<{ id: string; values: number[]; metadata: Chunk['metadata'] }> = [];
  for (let index = 0; index < allChunks.length; index++) {
    const chunk = allChunks[index];
    const values = await embedText(chunk.text);
    if (!values) {
      console.error(
        `Failed to embed chunk ${index} (${chunk.metadata.projectId}-${chunk.metadata.type}-${chunk.metadata.lang})`
      );
      continue;
    }
    vectors.push({
      id: `project-${chunk.metadata.projectId}-chunk-${chunk.metadata.type}-${chunk.metadata.lang}`,
      values,
      metadata: chunk.metadata,
    });
  }

  const BATCH_SIZE = 100;
  let inserted = 0;
  for (let start = 0; start < vectors.length; start += BATCH_SIZE) {
    const batch = vectors.slice(start, start + BATCH_SIZE);
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/vectorize/v2/indexes/${VECTORIZE_INDEX_ID}/vectors`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ vectors: batch }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.error(`Vectorize batch failed: ${data.error?.message || response.statusText}`);
        continue;
      }
      inserted += batch.length;
      console.log(`Upserted ${batch.length} vectors`);
    } catch (err) {
      console.error('Vectorize batch error:', err);
    }
  }

  console.log(`Embedded ${inserted}/${allChunks.length} vectors into index ${VECTORIZE_INDEX_ID}`);
  return inserted;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  embedProjects().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
