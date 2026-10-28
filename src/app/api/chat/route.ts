import { NextResponse } from 'next/server';
import { projects, experience } from '@/content/data';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_AI_MODEL = process.env.CLOUDFLARE_AI_MODEL || '@cf/meta/llama-3.1-8b-instruct';

export const runtime = 'nodejs';

type Lang = 'en' | 'vi';

const EMBEDDING_MODEL = '@cf/baai/bge-base-en-v1.5';
const VECTORIZE_INDEX_ID = process.env.VECTORIZE_INDEX_ID;
const VECTORIZE_API_TOKEN = process.env.VECTORIZE_API_TOKEN ?? process.env.CLOUDFLARE_API_TOKEN;
const TOP_K = 3;

const featuredProjects = projects
  .filter((p) => p.featured === true)
  .sort((a, b) => {
    const oa = (a as { order?: number }).order ?? 0;
    const ob = (b as { order?: number }).order ?? 0;
    return oa - ob;
  });

const formatProject = (p: (typeof projects)[number], lang: Lang): string => {
  const title = p.title[lang];
  const category = p.category[lang];
  const stack = p.tech.join(', ');
  const problem = lang === 'en' ? p.problem : p.problemVi ?? p.problem;
  const solution = lang === 'en' ? p.solution : p.solutionVi ?? p.solution;
  const evidence = p.evidence.map((e) => `${e.label}: ${e.url}`).join('; ');
  return [
    `- Title: ${title}`,
    `  Category: ${category}`,
    `  Stack: ${stack}`,
    `  Problem: ${problem}`,
    `  Solution: ${solution}`,
    `  Evidence: ${evidence}`,
    `  Limitations: ${p.limitations}`,
    `  Status: ${p.status}`,
    `  GitHub: ${p.githubUrl ?? p.github}`,
  ].join('\n');
};

const formatExperience = (exp: (typeof experience.items)[number], lang: Lang): string => {
  const role = exp.role[lang];
  const company = exp.company[lang];
  const period = exp.period[lang];
  const description = exp.description[lang];
  const tech = exp.tech.join(', ');
  return [
    `- **${role}** at ${company} (${period})`,
    `  ${description}`,
    `  Tech: ${tech}`,
  ].join('\n');
};

const buildSystemPrompt = (lang: Lang): string => {
  const isEn = lang === 'en';
  const intro = isEn
    ? 'Mai Nguyen Binh Tan is a Software Engineer specializing in Backend, Cloud Infrastructure & Applied AI, currently open to job opportunities, based in Ho Chi Minh City, Vietnam.'
    : 'Mai Nguyen Binh Tan là Kỹ sư Phần mềm chuyên Backend, Cloud Infrastructure & Applied AI, đang mở tìm việc, tại Hồ Chí Minh, Việt Nam.';

  const featuredHeading = isEn ? 'FEATURED PROJECTS' : 'DỰ ÁN NỔI BẬT';
  const additionalHeading = isEn ? 'ADDITIONAL PROJECTS' : 'DỰ ÁN BỔ SUNG';
  const skillsHeading = isEn ? 'SKILLS' : 'KỸ NĂNG';
  const experienceHeading = isEn ? 'EXPERIENCE' : 'KINH NGHIỆM';
  const contactHeading = isEn ? 'CONTACT' : 'LIÊN HỆ';
  const instructionsHeading = isEn ? 'INSTRUCTIONS' : 'HƯỚNG DẪN';

  const featuredList = featuredProjects.map((p) => formatProject(p, lang)).join('\n\n');

  const additionalProjects = [
    {
      name: 'SupportDesk',
      stack: 'Python, FastAPI, React, TypeScript, PostgreSQL, Qdrant, LangGraph, Temporal',
      purpose: isEn
        ? 'Support platform with ticket workflows, grounded draft generation, model-usage tracing and regression-oriented AI evaluation.'
        : 'Nền tảng hỗ trợ với luồng ticket, tạo bản tin ground, theo dõi sử dụng mô hình và đánh giá AI hướng hồi quy.',
      limitations: isEn
        ? 'Temporal workflow exists in code but is not verified on a live Temporal cluster; default runner is in-process.'
        : 'Luồng Temporal có trong mã nhưng chưa được kiểm chứng trên cụm Temporal trực tiếp; bộ chạy mặc định nằm trong tiến trình.',
    },
    {
      name: 'CreditFlow',
      stack: 'Python, FastAPI, React, scikit-learn, XGBoost, MLflow, Docker, PostgreSQL',
      purpose: isEn
        ? 'Demo credit-risk decision-support workflow with cost-sensitive classification, model tracking and human-review states.'
        : 'Demo workflow hỗ trợ quyết định rủi ro tín dụng với phân loại nhạy cảm chi phí, theo dõi mô hình và trạng thái phê duyệt con người.',
      limitations: isEn
        ? 'Demo uses a shared API key; not suitable for real lending decisions; not a banking production approval system.'
        : 'Demo dùng khóa API chung; không phù hợp cho quyết định vay thật; không phải hệ thống phê duyệt ngân hàng thực tế.',
    },
    {
      name: 'ApexInspect',
      stack: 'Python, YOLO, ONNX, TensorRT, OpenCV, Docker',
      purpose: isEn
        ? 'Industrial visual-inspection project covering detection training, model export and inference benchmarking workflows.'
        : 'Dự án trực quan học công nghiệp bao gồm huấn luyện phát hiện, xuất mô hình và quy trình benchmarking suy luận.',
      limitations: isEn
        ? 'README metrics marked as targets must not be presented as achieved production results; no fresh model accuracy or production edge SLA independently verified.'
        : 'Chỉ số trong README được đánh dấu là mục tiêu, không được trình bày là kết quả production đã đạt; chưa độc lập xác thực độ chính xác mô hình mới hay SLA edge production.',
    },
  ];

  const additionalList = additionalProjects
    .map(
      (p) =>
        [
          `- ${p.name}`,
          `  Stack: ${p.stack}`,
          `  Purpose: ${p.purpose}`,
          `  Limitations: ${p.limitations}`,
        ].join('\n')
    )
    .join('\n\n');

  const experienceList = experience.items.map((e) => formatExperience(e, lang)).join('\n\n');

  const skills = isEn
    ? 'Backend: C#, .NET, Java, Spring Boot, Python, FastAPI, PostgreSQL, Oracle.\nDistributed systems: Redis, RabbitMQ, outbox/inbox, idempotency.\nCloud: Azure, AKS, Kubernetes, Terraform, Argo CD, Docker, GitHub Actions, Prometheus, Grafana.\nApplied AI: RAG, LangGraph, Qdrant, MLflow.'
    : 'Backend: C#, .NET, Java, Spring Boot, Python, FastAPI, PostgreSQL, Oracle.\nHệ thống phân tán: Redis, RabbitMQ, outbox/inbox, idempotency.\nĐám mây: Azure, AKS, Kubernetes, Terraform, Argo CD, Docker, GitHub Actions, Prometheus, Grafana.\nAI ứng dụng: RAG, LangGraph, Qdrant, MLflow.';

  const contact = isEn
    ? 'GitHub: https://github.com/imtarget05\nEmail: tanmainguyenbinh@gmail.com\nLinkedIn: https://www.linkedin.com/in/mainguyenbinhtan2005/?isSelfProfile=true\nLocation: Ho Chi Minh City, Vietnam'
    : 'GitHub: https://github.com/imtarget05\nEmail: tanmainguyenbinh@gmail.com\nLinkedIn: https://www.linkedin.com/in/mainguyenbinhtan2005/?isSelfProfile=true\nVị trí: Hồ Chí Minh, Việt Nam';

  const instructions = isEn
    ? `Answer concisely and professionally, in the same language as the user's question (English or Vietnamese). If you don't know something, say so honestly. Do not make up projects or experience.

FORMATTING RULES (strict):
• Keep responses SHORT — 2-4 sentences max for simple questions
• Use bullet points (•) for lists
• Use **bold** for key terms/technologies
• Group related info into clear sections with headers
• For skills: group by category with clear labels
• For projects: structured format — **Title**, Stack, Highlights
• Add visual separators (---) between sections
• NO verbose explanations unless explicitly asked`
    : `Trả lời ngắn gọn, chuyên nghiệp, cùng ngôn ngữ với câu hỏi của người dùng (tiếng Anh hoặc tiếng Việt). Nếu không biết, hãy thừa nhận thẳng thắn. Đừng bịa dự án hoặc kinh nghiệm.

QUY TẮC ĐỊNH DẠNG (bắt buộc):
• Giữ câu trả lời NGẮN — tối đa 2-4 câu cho câu hỏi đơn giản
• Sử dụng bullet points (•) cho danh sách
• Sử dụng **bold** cho thuật ngữ/ngôn ngữ quan trọng
• Nhóm thông tin liên quan thành các mục rõ ràng với tiêu đề
• Với kỹ năng: nhóm theo danh mục với nhãn rõ ràng
• Với dự án: định dạng có cấu trúc — **Tiêu đề**, Stack, Điểm nổi bật
• Thêm phân cách (---) giữa các phần
• KHÔNG giải thích chi tiết trừ khi được yêu cầu`;

  return [
    'You are an AI assistant for the portfolio of Mai Nguyen Binh Tan.',
    '',
    `PERSONAL: ${intro}`,
    '',
    `${experienceHeading}:`,
    experienceList,
    '',
    `${featuredHeading}:`,
    featuredList,
    '',
    `${additionalHeading}:`,
    additionalList,
    '',
    `${skillsHeading}:`,
    skills,
    '',
    `${contactHeading}:`,
    contact,
    '',
    `${instructionsHeading}:`,
    instructions,
  ].join('\n');
};

const SYSTEM_PROMPT_EN = buildSystemPrompt('en');
const SYSTEM_PROMPT_VI = buildSystemPrompt('vi');

async function embedText(text: string): Promise<number[] | null> {
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    return null;
  }
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
    return null;
  } catch {
    return null;
  }
}

async function queryVectorize(embedding: number[], lang: Lang): Promise<string> {
  if (!CLOUDFLARE_ACCOUNT_ID || !VECTORIZE_INDEX_ID || !VECTORIZE_API_TOKEN) {
    return '';
  }
  try {
    const url = new URL(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/vectorize/v2/indexes/${VECTORIZE_INDEX_ID}/query`
    );
    url.searchParams.set('vector', embedding.join(','));
    url.searchParams.set('topK', String(TOP_K));
    url.searchParams.set('returnMetadata', 'true');

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${VECTORIZE_API_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return '';
    }
    const matches = data.result?.matches || [];
    const parts: string[] = [];
    for (const match of matches) {
      const meta = match.metadata || {};
      const text = meta.text || '';
      const urlField = meta.url || '';
      if (text) {
        parts.push(text);
      }
      if (urlField) {
        parts.push(`(Nguồn: ${urlField})`);
      }
    }
    return parts.join('\n');
  } catch {
    return '';
  }
}

export async function POST(request: Request) {
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_TOKEN) {
    return NextResponse.json(
      { error: 'Chat service is not configured. Please set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.' },
      { status: 500 }
    );
  }

  let body: {
    messages?: Array<{ role: string; content: string }>;
    lang?: Lang;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { messages, lang = 'en' } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: 'messages is required' }, { status: 400 });
  }

  const userMessages = messages.filter((m) => m.role === 'user');
  const question = userMessages.length > 0 ? userMessages[userMessages.length - 1].content : '';

  let context = '';
  if (question) {
    const embedding = await embedText(question);
    if (embedding) {
      context = await queryVectorize(embedding, lang);
    }
  }

  let systemPromptContent = lang === 'vi' ? SYSTEM_PROMPT_VI : SYSTEM_PROMPT_EN;
  if (context) {
    systemPromptContent = [
      'RELEVANT CONTEXT (from portfolio documents):',
      context,
      '',
      '---',
      '',
      systemPromptContent,
    ].join('\n');
  }

  const systemPrompt = {
    role: 'system',
    content: systemPromptContent,
  };

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${CLOUDFLARE_AI_MODEL}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [systemPrompt, ...messages],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'Cloudflare Workers AI request failed' },
        { status: response.status }
      );
    }

    const reply = data.result?.response || data.result || '';
    return NextResponse.json({ reply });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to reach chat service' },
      { status: 502 }
    );
  }
}
