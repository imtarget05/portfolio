import { projects } from '../src/content/data';
import { execSync } from 'child_process';
import { writeFileSync, unlinkSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

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

    // For career orientation projects, include explicit focus area
    const focusArea = project.id === 'career-orientation'
      ? lang === 'en' ? 'Career orientation: IT & Banking sector, Backend/API development' : 'Định hướng nghề nghiệp: Ngoại ngành CNTT & Ngân hàng'
      : '';

    const text1 = [
      `Title: ${title}`,
      `Category: ${category}`,
      `Stack: ${stack}`,
      `Problem: ${problem}`,
      `Solution: ${solution}`,
      focusArea ? `Focus: ${focusArea}` : '',
    ].join('\n').replace(/\n\n$/, '\n'); // Remove trailing double newline
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

  const vectors = [];
  for (let index = 0; index < allChunks.length; index++) {
    const chunk = allChunks[index];
    const values = await embedText(chunk.text);
    if (!values) continue;
    vectors.push({
      id: `project-${chunk.metadata.projectId}-chunk-${chunk.metadata.type}-${chunk.metadata.lang}`,
      values,
      metadata: chunk.metadata,
    });
  }

  if (vectors.length === 0) {
    console.log('No vectors to insert');
    return 0;
  }

  const tempFile = join(tmpdir(), `vectorize-${Date.now()}.json`);
  const ndjson = vectors.map((v) => JSON.stringify(v)).join('\n') + '\n';
  writeFileSync(tempFile, ndjson);

  try {
    const output = execSync(
      `wrangler vectorize insert ${VECTORIZE_INDEX_ID} --file=${tempFile}`,
      { encoding: 'utf-8', stdio: 'pipe' }
    );
    console.log(output);
    return vectors.length;
  } catch (err: any) {
    console.error('Wrangler insert failed:', err.stderr || err.message);
    return 0;
  } finally {
    try {
      unlinkSync(tempFile);
    } catch {}
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  embedProjects().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
