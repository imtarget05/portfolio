
export const techStack = {
  title: { en: 'Tech Stack', vi: 'Công Nghệ' },
  categories: [
    {
      name: { en: 'Backend', vi: 'Backend' },
      items: ['C#', '.NET 10', 'ASP.NET Core', 'Java Spring Boot', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'MongoDB'],
    },
    {
      name: { en: 'Frontend', vi: 'Frontend' },
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Framer Motion'],
    },
    {
      name: { en: 'Cloud & DevOps', vi: 'Cloud & DevOps' },
      items: ['Azure', 'AKS', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Argo CD', 'GitHub Actions', 'Azure Monitor'],
    },
    {
      name: { en: 'AI & Data', vi: 'AI & Dữ liệu' },
      items: ['LLM', 'RAG', 'LangGraph', 'Qdrant', 'Ollama', 'MLflow', 'Apache Airflow', 'Corrective RAG'],
    },
  ],
};

export const experience = {
  title: { en: 'Experience', vi: 'Kinh Nghiệm' },
  items: [
    {
      id: 'fullstack-intern',
      role: { en: 'Fullstack Intern', vi: 'Thực tập sinh Fullstack' },
      company: { en: 'ERA Group', vi: 'Công ty TNHH ERA Group' },
      period: { en: '3 months', vi: '3 tháng' },
      description: { en: 'Fullstack development internship contributing to frontend and backend features, API integration, and UI components.', vi: 'Thực tập phát triển fullstack tham gia tính năng frontend và backend, tích hợp API và các thành phần giao diện.' },
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
  ],
};

export const services = {
  title: { en: 'Services', vi: 'Dịch Vụ' },
  subtitle: { en: 'Freelance & Project-Based Work', vi: 'Làm tự do & Dự án' },
  items: [
    {
      id: 'web-app',
      title: { en: 'Website & Web App Development', vi: 'Phát triển Website & Ứng dụng Web' },
      desc: { en: 'Modern, responsive websites and web applications built with React, Next.js and Tailwind CSS.', vi: 'Website và ứng dụng web hiện đại, tương thích nhiều thiết bị được xây dựng bằng React, Next.js và Tailwind CSS.' },
    },
    {
      id: 'backend-api',
      title: { en: 'Custom Business Applications', vi: 'Ứng dụng Doanh nghiệp Tùy chỉnh' },
      desc: { en: 'Enterprise-grade backend systems, microservices and business logic tailored to your needs.', vi: 'Hệ thống backend cấp doanh nghiệp, microservices và logic nghiệp vụ được tùy chỉnh theo nhu cầu của bạn.' },
    },
    {
      id: 'ai-chatbot',
      title: { en: 'AI Chatbot & Automation', vi: 'AI Chatbot & Tự động hóa' },
      desc: { en: 'LLM-powered chatbots, RAG systems, and AI agent workflows for business automation.', vi: 'Chatbot, hệ thống RAG và quy trình AI agent hỗ trợ tự động hóa doanh nghiệp.' },
    },
    {
      id: 'cloud-devops',
      title: { en: 'Cloud Deployment & DevOps', vi: 'Triển khai Cloud & DevOps' },
      desc: { en: 'CI/CD pipelines, Kubernetes, Docker, Terraform and observability on Azure and AWS.', vi: 'Pipeline CI/CD, Kubernetes, Docker, Terraform và quan sát hệ thống trên Azure và AWS.' },
    },
  ],
};

export const contact = {
  title: { en: 'Contact', vi: 'Liên Hệ' },
  subtitle: { en: 'Have a project in mind? Let’s build something great.', vi: 'Có dự án nào trong đầu? Hãy cùng xây dựng điều tuyệt vời.' },
  cta: { en: 'Have a project in mind? Let’s build something great.', vi: 'Có dự án nào trong đầu? Hãy cùng xây dựng điều tuyệt vời.' },
  buttonWork: { en: 'View My Work', vi: 'Xem công việc của tôi' },
  buttonContact: { en: "Let's Work Together", vi: 'Hãy làm việc cùng nhau' },
  email: 'tanmainguyenbinh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mainguyenbinhtan2005/?isSelfProfile=true',
  github: 'https://github.com/imtarget05',
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'Thành phố Hồ Chí Minh, Việt Nam' },
};



export const education = [
  {
    id: 'uit',
    school: { en: 'University of Information Technology (UIT)', vi: 'Trường Đại học Công nghệ Thông tin (UIT)' },
    period: { en: '2023 — 2027', vi: '2023 — 2027' },
    location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  },
];

export const certifications = [
  {
    id: 'toeic-lr',
    name: { en: 'TOEIC Listening & Reading', vi: 'TOEIC Nghe/Đọc' },
    issuer: { en: 'ETS / IIG Vietnam', vi: 'ETS / IIG Việt Nam' },
    date: { en: 'Jan 2026', vi: '01/2026' },
    expiry: { en: 'Jan 2027', vi: '01/2027' },
    score: { en: '595/990', vi: '595/990' },
    image: '/images/certificates/TOEIC_Listening_Reading_Certificate.png',
  },
  {
    id: 'toeic-sw',
    name: { en: 'TOEIC Speaking & Writing', vi: 'TOEIC Nói/Viết' },
    issuer: { en: 'ETS / IIG Vietnam', vi: 'ETS / IIG Việt Nam' },
    date: { en: 'Apr 2026', vi: '04/2026' },
    expiry: { en: 'Apr 2027', vi: '04/2027' },
    score: { en: '210/400', vi: '210/400' },
    image: '/images/certificates/TOEIC_Speaking_Writing_Certificate.png',
  },
  {
    id: 'google-ai-essentials',
    name: { en: 'Google AI Essentials', vi: 'Google AI Essentials' },
    issuer: { en: 'Google', vi: 'Google' },
    date: { en: 'Aug 2025', vi: '08/2025' },
    credentialId: 'WENGZE49XSCV',
    image: '/images/certificates/Screenshot 2026-10-28 at 20.15.57.png',
  },
  {
    id: 'google-crash-python',
    name: { en: 'Crash Course on Python', vi: 'Python Crash Course' },
    issuer: { en: 'Google', vi: 'Google' },
    date: { en: 'Sep 2025', vi: '09/2025' },
    credentialId: 'A0VZD4ZAX6D6',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~A0VZD4ZAX6D6.jpeg',
  },
  {
    id: 'google-google-it-automation',
    name: { en: 'Google IT Automation with Python', vi: 'Google IT Automation with Python' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: 'PSX4R6MJI2T4',
    image: '/images/certificates/Screenshot 2026-10-28 at 20.11.14.png',
  },
  {
    id: 'google-accelerate-ai',
    name: { en: 'Accelerate Your Job Search with AI', vi: 'Tăng tốc tìm việc với AI' },
    issuer: { en: 'Google', vi: 'Google' },
    date: { en: 'Apr 2026', vi: '04/2026' },
    credentialId: '2WI13SPU1L9J',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~2WI13SPU1L9J.jpeg',
  },
  {
    id: 'google-automate-python',
    name: { en: 'Automating Real-World Tasks with Python', vi: 'Tự động hóa tác vụ thực tế với Python' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: 'U318QFRRKIJT',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~U318QFRRKIJT.jpeg',
  },
  {
    id: 'google-troubleshoot',
    name: { en: 'Troubleshooting and Debugging Techniques', vi: 'Khắc phục và gỡ lỗi' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: 'NGPR75MTBHQ8',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~NGPR75MTBHQ8.jpeg',
  },
  {
    id: 'google-config-cloud',
    name: { en: 'Configuration Management and the Cloud', vi: 'Quản lý cấu hình và đám mây' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: 'QAUBAZRDNP3T',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~QAUBAZRDNP3T.jpeg',
  },
  {
    id: 'google-interact-os',
    name: { en: 'Using Python to Interact with the Operating System', vi: 'Sử dụng Python tương tác với HĐH' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: '0L4616E83KIN',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~0L4616E83KIN.jpeg',
  },
  {
    id: 'google-intro-git',
    name: { en: 'Introduction to Git and GitHub', vi: 'Giới thiệu Git và GitHub' },
    issuer: { en: 'Google', vi: 'Google' },
    credentialId: 'EDBIUJ0ISAVK',
    image: '/images/certificates/CERTIFICATE_LANDING_PAGE~EDBIUJ0ISAVK.jpeg',
  },
];

export const languages = [
  {
    name: { en: 'English', vi: 'Tiếng Anh' },
    level: { en: 'TOEIC 595 / 990', vi: 'TOEIC 595 / 990' },
    detail: { en: 'Listening/Reading: 595 · Speaking/Writing: 210 · Valid until Jan 2027', vi: 'Nghe/Đọc: 595 · Nói/Viết: 210 · HSL đến 01/2027' },
  },
];

export const footer = {
  copyright: { en: '© 2026 Mai Nguyen Binh Tan. All rights reserved.', vi: '© 2026 Mai Nguyen Binh Tan. Bảo lưu mọi quyền.' },
  builtWith: { en: 'Built with Next.js, Tailwind CSS & Framer Motion', vi: 'Xây dựng bằng Next.js, Tailwind CSS & Framer Motion' },
};

export const getContent = (lang: Lang) => {
  const t = (key: string) => {
    const parts = key.split('.');
    let val: any = { nav, hero, about, expertise, projects, techStack, experience, services, contact, footer };
    for (const p of parts) {
      val = val?.[p];
    }
    if (typeof val === 'object' && val !== null && 'en' in val) {
      return (val as { en: string; vi: string })[lang];
    }
    return val;
  };
  return t;
};
export type Lang = 'en' | 'vi';

export interface Project {
  id: string;
  title: { en: string; vi: string };
  category: { en: string; vi: string };
  roleFit: ProjectRoleFit;
  description: { en: string; vi: string };
  tech: string[];
  github: string;
  image?: string;
  featured: boolean;
  order?: number;
  problem?: string;
  problemVi?: string;
  solution?: string;
  solutionVi?: string;
  architecture?: string;
  mermaid?: string;
  engineeringDecisions?: string[];
  evidence?: { label: string; url: string }[];
  limitations?: string;
  status?: string;
  githubUrl?: string;
  demoUrl?: string | null;
}

export interface Service {
  id: string;
  title: { en: string; vi: string };
  description: { en: string; vi: string };
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: { en: string; vi: string };
  company: { en: string; vi: string };
  period: { en: string; vi: string };
  description: { en: string; vi: string };
  tech: string[];
}

export interface TechCategory {
  name: { en: string; vi: string };
  items: string[];
}

export interface ContactInfo {
  title: { en: string; vi: string };
  subtitle: { en: string; vi: string };
  cta: { en: string; vi: string };
  buttonWork: { en: string; vi: string };
  buttonContact: { en: string; vi: string };
  email: string;
  linkedin: string;
  github: string;
  location: { en: string; vi: string };
}

export const nav = {
  about: { en: 'About', vi: 'Giới thiệu' },
  expertise: { en: 'Expertise', vi: 'Chuyên môn' },
  skills: { en: 'Skills', vi: 'Kỹ năng' },
  projects: { en: 'Projects', vi: 'Dự án' },
  roles: { en: 'Roles', vi: 'Vị trí' },
  immersive: { en: 'Immersive 3D', vi: '3D Đầy Đủ' },
  tech: { en: 'Tech Stack', vi: 'Công nghệ' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm' },
  services: { en: 'Services', vi: 'Dịch vụ' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
  career: { en: 'Career Center', vi: 'Trung tâm Nghề nghiệp' },
};

export const hero = {
  headline: {
    en: 'Software & Cloud Engineer',
    vi: 'Kỹ sư Phần mềm & Đám mây',
  },
  subheadline: {
    en: 'Backend Systems · DevOps · Applied AI',
    vi: 'Hệ thống Backend · DevOps · AI Ứng dụng',
  },
  cta: {
    en: 'Explore my engineering work',
    vi: 'Khám phá công việc kỹ thuật của tôi',
  },
  buttonWork: { en: 'View My Work', vi: 'Xem công việc của tôi' },
  buttonContact: { en: "Let's Work Together", vi: 'Hãy làm việc cùng nhau' },
};

export const about = {
  title: { en: 'About Me', vi: 'Về Tôi' },
  introEn: `I'm a Software & Cloud Engineer focused on backend reliability, infrastructure automation, and applied AI. I build systems that work beyond the demo — with transactional reliability, GitOps delivery, and verifiable engineering evidence.`,
  introVi: `Tôi là Kỹ sư Phần mềm & Đám mây tập trung vào độ tin cậy backend, tự động hóa hạ tầng và AI ứng dụng. Tôi xây dựng các hệ thống vận hành được ngoài bản demo — với độ tin cậy giao dịch, triển khai GitOps và bằng chứng kỹ thuật có thể xác minh.`,
  focusEn: `My focus is on clean architecture, performance, maintainability, and delivering practical solutions from development to deployment — backed by tests, CI, and honest boundaries.`,
  focusVi: `Tôi chú trọng kiến trúc rõ ràng, hiệu năng, khả năng bảo trì và khả năng triển khai vận hành thực tế — được hỗ trợ bởi kiểm thử, CI và ranh giới trung thực.`,
};

export const expertise = {
  title: { en: 'Expertise', vi: 'Chuyên Môn' },
  items: [
    {
      title: { en: 'Backend & Software Engineering', vi: 'Backend & Kỹ thuật Phần mềm' },
      desc: { en: 'REST API, microservices, distributed systems, databases, authentication & business logic. Transactional reliability, idempotency, and failure recovery.', vi: 'REST API, microservices, hệ thống phân tán, cơ sở dữ liệu, xác thực và logic nghiệp vụ. Độ tin cậy giao dịch, idempotency và khôi phục khi lỗi.' },
    },
    {
      title: { en: 'Cloud & DevOps', vi: 'Cloud & DevOps' },
      desc: { en: 'Docker, Kubernetes, CI/CD, Azure, AWS, Terraform, Argo CD, OpenTelemetry. Infrastructure as Code, GitOps, monitoring, security policy, rollback.', vi: 'Docker, Kubernetes, CI/CD, Azure, AWS, Terraform, Argo CD, OpenTelemetry. Hạ tầng dưới dạng mã, GitOps, giám sát, chính sách bảo mật, rollback.' },
    },
    {
      title: { en: 'Applied AI Engineering', vi: 'Kỹ thuật AI Ứng dụng' },
      desc: { en: 'LLM, RAG, LangGraph, Qdrant, MCP. AI incident triage, document intelligence, and AI-assisted incident response.', vi: 'LLM, RAG, LangGraph, Qdrant, MCP. Phân loại sự cố AI, trí tuệ tài liệu và AI hỗ trợ xử lý sự cố.' },
    },
    {
      title: { en: 'Enterprise Software Engineering', vi: 'Kỹ thuật Phần mềm Doanh nghiệp' },
      desc: { en: 'Business logic, inventory management, double-entry bookkeeping, RBAC, Maker–Checker approval workflows.', vi: 'Logic nghiệp vụ, quản lý tồn kho, sổ cái kép, phân quyền và quy trình duyệt Người tạo–Người duyệt.' },
    },
  ],
};

export type RoleKey = 'backend' | 'devops' | 'ai' | 'network' | 'bank' | 'erp';

export interface ProjectRoleFit {
  backend: number;
  devops: number;
  ai: number;
  bank: number;
  network: number;
  erp: number;
}

export interface RoleConfig {
  key: RoleKey;
  title: { en: string; vi: string };
  subtitle: { en: string; vi: string };
  description: { en: string; vi: string };
  primaryColor: string;
}

export const roleConfigs: Record<RoleKey, RoleConfig> = {
  backend: {
    key: 'backend',
    title: { en: 'Backend / Software Engineer', vi: 'Kỹ sư Backend / Phần mềm' },
    subtitle: { en: 'Backend Engineering', vi: 'Kỹ thuật Backend' },
    description: {
      en: 'Transactional reliability, concurrency control, idempotency, and failure recovery in distributed backend systems.',
      vi: 'Độ tin cậy giao dịch, kiểm soát đồng thời, idempotency và khôi phục khi lỗi trong hệ thống backend phân tán.',
    },
    primaryColor: 'primary',
  },
  devops: {
    key: 'devops',
    title: { en: 'DevOps / Cloud Engineer', vi: 'Kỹ sư DevOps / Cloud' },
    subtitle: { en: 'Cloud & Platform Engineering', vi: 'Kỹ thuật Cloud & Nền tảng' },
    description: {
      en: 'Infrastructure as Code, GitOps, observability, security policy, and rollback on Kubernetes.',
      vi: 'Hạ tầng dưới dạng mã, GitOps, quan sát, chính sách bảo mật và rollback trên Kubernetes.',
    },
    primaryColor: 'accent',
  },
  ai: {
    key: 'ai',
    title: { en: 'AI / GenAI Engineer', vi: 'Kỹ sư AI / GenAI' },
    subtitle: { en: 'Applied AI Engineering', vi: 'Kỹ thuật AI Ứng dụng' },
    description: {
      en: 'RAG, LangGraph, Qdrant, MCP — AI incident triage, document intelligence, and AI-assisted incident response.',
      vi: 'RAG, LangGraph, Qdrant, MCP — Phân loại sự cố AI, trí tuệ tài liệu và AI hỗ trợ xử lý sự cố.',
    },
    primaryColor: 'neon.500',
  },
  network: {
    key: 'network',
    title: { en: 'Network / Infrastructure Engineer', vi: 'Kỹ sư Mạng / Hạ tầng' },
    subtitle: { en: 'Network & Infrastructure Automation', vi: 'Tự động hóa Mạng & Hạ tầng' },
    description: {
      en: 'Cisco IOS, SSH, Ansible network automation and AKS networking with security policy.',
      vi: 'Tự động hóa mạng Cisco IOS, SSH, Ansible và mạng AKS với chính sách bảo mật.',
    },
    primaryColor: 'primary',
  },
  bank: {
    key: 'bank',
    title: { en: 'Banking Technology Engineer', vi: 'Kỹ sư Công nghệ Ngân hàng' },
    subtitle: { en: 'Banking & Financial Systems', vi: 'Hệ thống Ngân hàng & Tài chính' },
    description: {
      en: 'Double-entry bookkeeping, maker-checker approval, audit trails, and financial consistency in enterprise systems.',
      vi: 'Sổ cái kép, phê duyệt người tạo–người duyệt, dấu vết kiểm toán và tính nhất quán tài chính trong hệ thống doanh nghiệp.',
    },
    primaryColor: 'primary',
  },
  erp: {
    key: 'erp',
    title: { en: 'ERP / Manufacturing IT', vi: 'ERP / CNTT Sản xuất' },
    subtitle: { en: 'Enterprise ERP Systems', vi: 'Hệ thống ERP Doanh nghiệp' },
    description: {
      en: 'Oracle PL/SQL, .NET ERP, manufacturing execution, lot traceability, and inventory controls.',
      vi: 'Oracle PL/SQL, .NET ERP, thực thi sản xuất, truy vết theo lô và kiểm soát tồn kho.',
    },
    primaryColor: 'accent',
  },
};

export const projects = [
  {
    id: 'flashsale',
    title: { en: 'FlashSale Backend', vi: 'FlashSale Backend' },
    category: { en: 'Backend Engineering / Distributed Systems', vi: 'Kỹ thuật Backend / Hệ thống Phân tán' },
    roleFit: {
      backend: 5, devops: 4, ai: 1, bank: 5, network: 2, erp: 4,
    },
    description: {
      en: 'High-concurrency e-commerce backend for Flash Sale events. Java Spring Boot with PostgreSQL, Redis and RabbitMQ. Demonstrates transactional reliability, idempotency, Transactional Outbox pattern, and failure recovery under concurrent load.',
      vi: 'Hệ thống backend thương mại điện tử cao đồng thời cho các đợt Flash Sale. Java Spring Boot với PostgreSQL, Redis và RabbitMQ. Chứng minh độ tin cậy giao dịch, idempotency, mẫu Transactional Outbox và khôi phục khi lỗi xảy ra dưới tải đồng thời.',
    },
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/imtarget05/FlashSale-Backend',
    image: undefined,
    featured: true,
    order: 1,
    problem: 'Concurrent checkouts can oversell inventory; asynchronous workers can lose, duplicate or indefinitely retry business events.',
    problemVi: 'Nhiều lượt thanh toán cùng lúc có thể bán vượt tồn kho; tác vụ bất đồng bộ có thể làm mất, lặp hoặc liên tục xử lý lại sự kiện nghiệp vụ.',
    solution: 'Stock-conservation checks with Redis/Lua, PostgreSQL concurrency control, Transactional Outbox/Inbox patterns, Dead Letter Queue replay, RBAC and Clean Architecture boundaries. 175 tests pass on the public baseline.',
    solutionVi: 'Kiểm soát tồn kho bằng Redis/Lua và PostgreSQL; dùng outbox/inbox, hàng đợi lỗi, phân quyền và ranh giới kiến trúc rõ ràng. 175 test đạt trên baseline công khai.',
    architecture: 'Clean Architecture with separated bounded contexts. FlashSale handles order reliability; event-driven communication via RabbitMQ with Transactional Outbox pattern for eventual consistency. PostgreSQL as primary store, Redis for caching and atomic inventory operations.',
    mermaid: `flowchart TB
    Client[Client]:::client -->|HTTP| API[Spring Boot API]:::service
    API -->|idempotency key| Redis[(Redis)]:::store
    API -->|tx + outbox| PG[(PostgreSQL)]:::store
    API -->|publish| MQ[(RabbitMQ)]:::bus
    MQ -->|consume| Worker[Worker Service]:::service
    Worker -->|update| PG
    Redis -->|atomic check| PG
    classDef client fill:#e2dbce,stroke:#a14731,color:#1b2020;
    classDef service fill:#f3eee5,stroke:#a14731,color:#1b2020;
    classDef store fill:#d6cec0,stroke:#a14731,color:#1b2020;
    classDef bus fill:#deb997,stroke:#a14731,color:#1b2020;`,
    engineeringDecisions: [
      'Redis Lua scripts for atomic inventory decrement under concurrent load',
      'Transactional outbox pattern to decouple domain events from API responses',
      'DLQ (Dead Letter Queue) with retry and reconciliation workflows',
      'Clean Architecture boundaries between order and operations contexts',
      'Idempotency keys for safe retry of payment and order operations'
    ],
    evidence: [
      { label: 'Recruiter evidence and caveats', url: 'https://github.com/imtarget05/FlashSale-Backend/blob/main/docs/RECRUITER-EVIDENCE.md' },
      { label: 'CI verification evidence', url: 'https://github.com/imtarget05/FlashSale-Backend/blob/main/docs/evidence/ci-verification.md' },
      { label: 'Latest recorded CI run', url: 'https://github.com/imtarget05/FlashSale-Backend/actions/runs/44504582438' }
    ],
    limitations: 'Payments are simulated. Latest main CI run checked on 25 Oct 2026 passed Java unit and integration tests, image build, manifests and Sonar. Deployment workflow skipped deploy jobs. No real bank rail, active AKS or measured throughput claim.',
    status: '175/175 tests passing on baseline commit baf2aa16 (PostgreSQL 15, RabbitMQ, Redis, MongoDB). Main CI green. Re-run before claiming green CI on latest commit.',
    githubUrl: 'https://github.com/imtarget05/FlashSale-Backend',
    demoUrl: null,
  },
  {
    id: 'quanlykho',
    title: { en: 'QuanLyKho — Inventory & Treasury', vi: 'QuanLyKho — Quản lý Kho & Sổ cái' },
    category: { en: 'Enterprise Software Engineering', vi: 'Kỹ thuật Phần mềm Doanh nghiệp' },
    roleFit: {
      backend: 5, devops: 3, ai: 2, bank: 5, network: 1, erp: 5,
    },
    description: {
      en: 'Enterprise warehouse management and treasury application. Python FastAPI backend with PostgreSQL, Flutter frontend, Docker containerization. Demonstrates business logic, inventory management, double-entry bookkeeping, RBAC and Maker–Checker approval workflows.',
      vi: 'Ứng dụng quản lý kho và sổ tài doanh nghiệp. Backend Python FastAPI với PostgreSQL, giao diện Flutter, Docker containerization. Chứng minh logic nghiệp vụ, quản lý tồn kho, sổ cái kép, phân quyền và quy trình duyệt Maker–Checker.',
    },
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Flutter', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/imtarget05/QuanLyKho',
    image: undefined,
    featured: true,
    order: 3,
    problem: 'Warehouse records, approvals and exceptions become unreliable when inventory updates and operational decisions are not controlled and traceable.',
    problemVi: 'Dữ liệu kho, phê duyệt và ngoại lệ dễ thiếu tin cậy khi thay đổi tồn kho và quyết định vận hành không được kiểm soát, truy vết.',
    solution: 'Flutter operations screens with FastAPI/PostgreSQL business API, role-based access control, maker–checker approval flows, inventory history and audit-oriented data model. 1,285 backend tests and 355 frontend tests pass on the recorded baseline.',
    solutionVi: 'Giao diện Flutter với API FastAPI/PostgreSQL, phân quyền, quy trình duyệt người tạo–người duyệt, lịch sử tồn kho và mô hình dữ liệu hướng kiểm toán. 1.285 test backend và 355 test frontend đạt trên baseline đã ghi nhận.',
    architecture: 'Flutter frontend communicating with FastAPI backend via REST API. PostgreSQL as primary data store with audit trails and double-entry bookkeeping. Docker containerized deployment with CI/CD pipeline.',
    mermaid: `flowchart TB
    Mobile[Flutter Mobile]:::client -->|REST API| API[FastAPI Backend]:::service
    API -->|tx| PG[(PostgreSQL)]:::store
    PG -->|audit trail| Audit[Audit Log]:::store
    API -->|maker-checker| Approval[Approval Flow]:::service
    API -->|double-entry| GL[General Ledger]:::store
    Docker[Docker]:::tool -->|containerize| API
    classDef client fill:#e2dbce,stroke:#a14731,color:#1b2020;
    classDef service fill:#f3eee5,stroke:#a14731,color:#1b2020;
    classDef store fill:#d6cec0,stroke:#a14731,color:#1b2020;
    classDef tool fill:#d9d2c6,stroke:#a14731,color:#1b2020;`,
    engineeringDecisions: [
      'Flutter for mobile-first operations UX with controlled API access',
      'FastAPI with PostgreSQL for transactional business logic and auditability',
      'Maker-checker approval flow with RBAC for role-based operations',
      'Audit-oriented data model with immutable operation history',
      'Double-entry bookkeeping for financial consistency'
    ],
    evidence: [
      { label: 'README and scope disclaimers', url: 'https://github.com/imtarget05/QuanLyKho/blob/main/README.md' },
      { label: 'Employee app design evidence', url: 'https://github.com/imtarget05/QuanLyKho/blob/main/docs/employee-app/README.md' },
      { label: 'Recorded CI success', url: 'https://github.com/imtarget05/QuanLyKho/actions/runs/44129715048' }
    ],
    limitations: 'Simulated financial operations: not banking software, not a live financial integration. Cloud/ML components are exploratory, not production-proven.',
    status: '1,285 backend tests and 355 frontend tests passing on recorded baseline; main CI succeeded including database-backed adversarial banking tests. CI reviewed 25 Oct 2026.',
    githubUrl: 'https://github.com/imtarget05/QuanLyKho',
    demoUrl: null,
  },
  {
    id: 'doc-intelligence',
    title: { en: 'Enterprise Document Intelligence', vi: 'Trí tuệ Tài liệu Doanh nghiệp' },
    category: { en: 'GenAI / LLM Engineering', vi: 'Kỹ thuật GenAI / LLM' },
    roleFit: {
      backend: 4, devops: 3, ai: 5, bank: 3, network: 1, erp: 4,
    },
    description: {
      en: 'Enterprise document management and AI extraction platform. Semantic search, document Q&A, Corrective RAG, hybrid search and multi-agent orchestration with LangGraph and Qdrant.',
      vi: 'Nền tảng quản lý và khai thác tài liệu doanh nghiệp bằng AI. Tìm kiếm ngữ nghĩa, hỏi đáp tài liệu, Corrective RAG, hybrid search và điều phối multi-agent với LangGraph và Qdrant.',
    },
    tech: ['React', 'Java Spring Boot', 'Python', 'FastAPI', 'LangGraph', 'Qdrant', 'Ollama', 'Docker'],
    github: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform',
    image: undefined,
    featured: false,
    order: 5,
    problem: 'Enterprise documents are scattered and hard to search; employees waste time finding information instead of acting on it.',
    problemVi: 'Tài liệu doanh nghiệp bị phân tán và khó tìm kiếm; nhân viên mất thời gian tìm thông tin thay vì hành động.',
    solution: 'Corrective RAG pipeline with self-reflection and re-retrieval, Qdrant vector store for semantic search, LangGraph for multi-agent document processing workflows, and hybrid search combining keyword and semantic retrieval.',
    solutionVi: 'Pipeline Corrective RAG với tự phản hồi và truy xuất lại, Qdrant vector store cho tìm kiếm ngữ nghĩa, LangGraph cho quy trình xử lý tài liệu multi-agent, và hybrid search kết hợp tìm kiếm từ khóa và ngữ nghĩa.',
    architecture: 'React frontend with Spring Boot API gateway, Python FastAPI RAG service with Qdrant vector store, LangGraph multi-agent orchestration, Ollama for local LLM inference.',
    engineeringDecisions: [
      'Corrective RAG with self-reflection for improved answer accuracy',
      'Qdrant for high-performance vector similarity search',
      'LangGraph for stateful multi-agent document processing',
      'Hybrid search for keyword + semantic retrieval'
    ],
    evidence: [
      { label: 'README and architecture docs', url: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform/blob/main/README.md' }
    ],
    limitations: 'Documentation reviewed; source code execution and fresh CI validation pending.',
    status: 'Documented RAG architecture; fresh testing pending.',
    githubUrl: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform',
    demoUrl: null,
  },
  {
    id: 'aks-sre',
    title: { en: 'AKS SRE Platform', vi: 'AKS SRE Platform' },
    category: { en: 'Cloud & Platform Engineering', vi: 'Kỹ thuật Đám mây & Nền tảng' },
    roleFit: {
      backend: 3, devops: 5, ai: 3, bank: 3, network: 5, erp: 4,
    },
    description: {
      en: 'Infrastructure-as-Code platform on Azure Kubernetes Service. Terraform, Argo CD GitOps, OpenTelemetry observability, security policy, rollback procedures, and AI-assisted incident response. Blueprint infrastructure with local testing.',
      vi: 'Nền tảng Infrastructure-as-Code trên Azure Kubernetes Service. Terraform, Argo CD GitOps, OpenTelemetry quan sát, chính sách bảo mật, quy trình rollback và AI hỗ trợ xử lý sự cố. Bản thiết kế hạ tầng có kiểm thử local.',
    },
    tech: ['Kubernetes', 'Terraform', 'Argo CD', 'Azure', 'OpenTelemetry', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/imtarget05/AKS-SRE-Platform',
    image: undefined,
    featured: true,
    order: 2,
    problem: 'Manual cloud provisioning is error-prone and slow; without GitOps and observability, production incidents take longer to detect and recover from.',
    problemVi: 'Cấu hình đám mây thủ công dễ sai và chậm; mà không có GitOps và quan sát, sự cố production khó phát hiện và khôi phục nhanh.',
    solution: 'Terraform for AKS cluster and networking provisioning, Argo CD for GitOps continuous delivery, OpenTelemetry for distributed tracing and metrics, Azure Monitor for alerting, security policies with OPA/Gatekeeper, and automated rollback runbooks.',
    solutionVi: 'Terraform cung cấp cluster AKS và mạng, Argo CD cho GitOps liên tục, OpenTelemetry cho tracing và chỉ số phân tán, Azure Monitor cảnh báo, chính sách bảo mật với OPA/Gatekeeper, và sổ chạy rollback tự động.',
    architecture: 'Terraform-managed Azure AKS cluster with Argo CD GitOps sync from GitHub. Applications deployed via Helm charts with OpenTelemetry sidecars for observability. Security policies enforced via OPA Gatekeeper. Local validation with kind clusters before cloud apply.',
    mermaid: `flowchart TB
    Dev[Developer]:::client -->|git push| GH[GitHub]:::service
    GH -->|GitOps sync| AC[Argo CD]:::service
    AC -->|deploy| AKS[(AKS Cluster)]:::infra
    AKS -->|workloads| App[Application Pods]:::service
    AKS -->|provision| TF[Terraform]:::tool
    TF -->|infrastructure| Azure[Azure]:::cloud
    OTel[OpenTelemetry]:::tool -->|traces/metrics| Monitor[Azure Monitor]:::monitor
    App --> OTel
    classDef client fill:#e2dbce,stroke:#a14731,color:#1b2020;
    classDef service fill:#f3eee5,stroke:#a14731,color:#1b2020;
    classDef infra fill:#d6cec0,stroke:#a14731,color:#1b2020;
    classDef cloud fill:#deb997,stroke:#a14731,color:#1b2020;
    classDef tool fill:#d9d2c6,stroke:#a14731,color:#1b2020;
    classDef monitor fill:#cfc9be,stroke:#a14731,color:#1b2020;`,
    engineeringDecisions: [
      'Infrastructure as Code with Terraform for reproducible AKS environments',
      'Argo CD GitOps for declarative continuous delivery and drift detection',
      'OpenTelemetry for distributed tracing, metrics and logs',
      'OPA Gatekeeper for policy-as-code security enforcement',
      'Kind-based local testing before cloud deployment',
      'AI-assisted incident triage and runbook generation'
    ],
    evidence: [
      { label: 'Phase 7A AKS validation proof', url: 'https://github.com/imtarget05/AKS-SRE-Platform/blob/main/docs/evidence/phase7a/phase7a-FINAL-PASS.md' },
      { label: 'Platform README and limitations', url: 'https://github.com/imtarget05/AKS-SRE-Platform/blob/main/README.md' },
      { label: 'Latest main CI run', url: 'https://github.com/imtarget05/AKS-SRE-Platform/actions/runs/44129715048' }
    ],
    limitations: 'Blueprint infrastructure with local kind validation; temporary AKS cluster was torn down after validation. Single-node kind drill deployed two replicas, observed HTTP 200, injected ErrImagePull, kept old replicas serving, restored with rollout undo. No evidence of continuously running production cluster or SLO history.',
    status: 'Local kind proofs and temporary real-AKS validation passed. Main PR gate, GitOps validation, SBOS green. Cluster torn down post-validation. Re-run before claiming production-grade CI.',
    githubUrl: 'https://github.com/imtarget05/AKS-SRE-Platform',
    demoUrl: null,
  },
  {
    id: 'minierp',
    title: { en: 'MiniERP — Manufacturing & Warehouse', vi: 'MiniERP — Sản xuất & Kho' },
    category: { en: 'Enterprise ERP / Manufacturing', vi: 'ERP Doanh nghiệp / Sản xuất' },
    roleFit: {
      backend: 4, devops: 2, ai: 1, bank: 3, network: 1, erp: 5,
    },
    description: {
      en: 'Manufacturing and warehouse ERP simulation connecting material lots, production orders, traceability and inventory controls. Oracle PL/SQL backend with ASP.NET Core APIs.',
      vi: 'ERP mô phỏng sản xuất và kho kết nối nguyên liệu theo lô, đơn sản xuất, truy xuất và kiểm soát tồn kho. Backend Oracle PL/SQL với API ASP.NET Core.',
    },
    tech: ['Oracle', 'PL/SQL', 'C#', 'ASP.NET Core 8', 'Docker', 'GitHub Actions', 'SonarCloud'],
    github: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse',
    image: undefined,
    featured: false,
    order: 6,
    problem: 'Factories need lot-level stock accuracy, predictable material allocation and traceable finished-goods movement.',
    problemVi: 'Sản xuất cần tồn kho chính xác theo lô, phân bổ nguyên liệu có thể dự đoán và truy vết thành phẩm.',
    solution: 'Lot and FEFO rules, BOM-driven production, atomic inventory updates, genealogy tracking, approvals and ERP-oriented APIs with Oracle-backed scenarios for allocation, rollback and lot traceability.',
    solutionVi: 'Quy tắc theo lô và FEFO, sản xuất theo BOM, cập nhật tồn kho nguyên tử, theo dõi hệ谱, phê duyệt và API hướng ERP với kịch bản Oracle cho phân bổ, rollback và truy vết lô.',
    architecture: 'ASP.NET Core 8 API with Oracle PL/SQL backend for material lot and production order management. Docker containerized deployment with SonarCloud quality gates.',
    engineeringDecisions: [
      'Oracle PL/SQL for atomic inventory updates and lot-level traceability',
      'FEFO (First Expired, First Out) allocation rule with BOM-driven production',
      'Atomic inventory updates with guarded restore/test workflows',
      'SonarCloud quality gates for maintainable enterprise code'
    ],
    evidence: [
      { label: 'ERP implementation and test history', url: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse/blob/main/README.md' },
      { label: 'Latest observed CI/CD pipeline', url: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse/actions/runs/39091060699' }
    ],
    limitations: 'Demonstration/simulation for manufacturing workflows; no verified customer or live factory deployment. Latest observed CI/CD pipeline failed on 2026-10-18.',
    status: 'Historical test counts are README-recorded; latest observed CI/CD was failing on 2026-10-18.',
    githubUrl: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse',
    demoUrl: null,
  },
  {
    id: 'incidentiq',
    title: { en: 'IncidentIQ — AI Incident Triage', vi: 'IncidentIQ — Phân loại Sự cố AI' },
    category: { en: 'Applied AI Engineering', vi: 'Kỹ thuật AI Ứng dụng' },
    roleFit: {
      backend: 4, devops: 4, ai: 5, bank: 3, network: 2, erp: 4,
    },
    description: {
      en: 'AI-powered incident response platform with RAG, MCP, and intelligent triage. Automates incident classification, runbook retrieval, and suggested remediation for SRE and support teams.',
      vi: 'Nền tảng xử lý sự cố bằng AI với RAG, MCP và phân loại thông minh. Tự động hóa phân loại sự cố, truy xuất sổ chạy và đề xuất khắc phục cho đội SRE và hỗ trợ.',
    },
    tech: ['Python', 'FastAPI', 'RAG', 'MCP', 'LangGraph', 'Qdrant', 'Docker'],
    github: 'https://github.com/imtarget05/incidentiq',
    image: undefined,
    featured: true,
    order: 4,
    problem: 'Incident response is manual and slow; engineers waste time searching runbooks instead of resolving issues.',
    problemVi: 'Xử lý sự cố thủ công và chậm; kỹ sư mất thời gian tìm sổ chạy thay vì giải quyết sự cố.',
    solution: 'RAG-based incident knowledge retrieval with MCP tool integration, LangGraph workflow orchestration, and AI-generated remediation suggestions with human-in-the-loop approval. 30-case local keyword run and 30-case local hybrid run with real Workers AI embeddings — 20/20 document ID Recall@5 and 10/10 abstentions.',
    solutionVi: 'Truy xuất kiến thức sự cố dựa trên RAG với tích hợp công cụ MCP, điều phối quy trình LangGraph và đề xuất khắc phục do AI tạo với duyệt con người vào luồng. 30-case local keyword run và 30-case local hybrid run với embedding Workers AI thực — 20/20 Recall@5 mã tài liệu và 10/10 từ chối.',
    architecture: 'FastAPI backend with RAG pipeline over Qdrant vector store, LangGraph for incident workflow orchestration, MCP servers for tool integration, React frontend for incident dashboard.',
    engineeringDecisions: [
      'RAG for grounded incident knowledge retrieval with citations',
      'MCP for extensible tool integration across observability platforms',
      'LangGraph for stateful incident lifecycle workflows',
      'Human-in-the-loop approval for remediation actions'
    ],
    evidence: [
      { label: 'README and architecture docs', url: 'https://github.com/imtarget05/incidentiq/blob/main/README.md' },
      { label: 'Local FTS AI evidence (30 cases)', url: 'https://github.com/imtarget05/incidentiq/blob/3d16c49116b491db8578b9a2ce367f316f1fff33/docs/evidence/local-fts-ai-2026-11-19.md' },
      { label: 'Local hybrid AI evidence (30 cases)', url: 'https://github.com/imtarget05/incidentiq/blob/3d16c49116b491db8578b9a2ce367f316f1fff33/docs/evidence/local-hybrid-ai-2026-11-19.md' },
    ],
    limitations: 'AI-generated suggestions require human review; not a fully autonomous incident resolution system. PRs #13, #14, #16 require review and are not on main. Local vector run excluded hosted Vectorize and ETL.',
    status: 'Documented architecture and implementation; 30-case local keyword and hybrid runs verified (20/20 Recall@5). CI evidence pending fresh validation on main.',
    githubUrl: 'https://github.com/imtarget05/incidentiq',
    demoUrl: null,
  },
  {
    id: 'creditflow',
    title: { en: 'CreditFlow — Risk Decision Support', vi: 'CreditFlow — Hỗ trợ quyết định rủi ro' },
    category: { en: 'MLOps & Decision Systems', vi: 'MLOps & Hệ thống quyết định' },
    roleFit: {
      backend: 3, devops: 2, ai: 4, bank: 5, network: 1, erp: 2,
    },
    description: {
      en: 'Demo credit-risk decision-support workflow with cost-sensitive classification, model tracking and human-review states. XGBoost, scikit-learn, MLflow and PostgreSQL for audit snapshots.',
      vi: 'Demo workflow hỗ trợ quyết định rủi ro tín dụng với phân loại nhạy cảm chi phí, theo dõi mô hình và trạng thái duyệt con người. XGBoost, scikit-learn, MLflow và PostgreSQL cho chụp ảnh kiểm toán.',
    },
    tech: ['Python', 'FastAPI', 'React', 'scikit-learn', 'XGBoost', 'MLflow', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/imtarget05/CreditFlow',
    image: undefined,
    featured: false,
    order: 9,
    problem: 'A risk score alone is insufficient without business-cost trade-offs, controlled approvals and traceable model decisions.',
    problemVi: 'Điểm rủi ro riêng lẻ chưa đủ để ra quyết định nếu thiếu cân nhắc chi phí nghiệp vụ, phê duyệt và dấu vết quyết định mô hình.',
    solution: 'FastAPI backend with scikit-learn and XGBoost model evaluation, MLflow for experiment tracking, PostgreSQL for audit snapshots and stateful human-review states, React frontend for model interaction.',
    solutionVi: 'Backend FastAPI với đánh giá mô hình scikit-learn và XGBoost, MLflow theo dõi thử nghiệm, PostgreSQL cho chụp ảnh kiểm toán và trạng thái duyệt con người có trạng thái, giao diện React cho tương tác mô hình.',
    architecture: 'FastAPI backend with ML experiment tracking via MLflow, PostgreSQL for audit state, React frontend for model interaction and cost visualization.',
    engineeringDecisions: [
      'Asymmetric business cost model for threshold selection against false positives/negatives',
      'MLflow experiment tracking for model comparison and reproducibility',
      'Stateful API with human-review approval states between prediction and action',
      'Audit snapshots stored in PostgreSQL for compliance and review'
    ],
    evidence: [
      { label: 'README and authentication caveats', url: 'https://github.com/imtarget05/CreditFlow/blob/main/README.md' }
    ],
    limitations: 'Demo uses a shared API key; not suitable for real lending decisions. Not a banking production approval system.',
    status: 'Code and testing evidence documented; not a production banking system.',
    githubUrl: 'https://github.com/imtarget05/CreditFlow',
    demoUrl: null,
  },
  {
    id: 'career-orientation',
    title: { en: 'Career Orientation - IT & Banking', vi: 'Định hướng Nghề nghiệp - CNTT & Ngân hàng' },
    category: { en: 'Professional Profile', vi: 'Bài bản Nghề nghiệp' },
    description: {
      en: 'Software Engineer with background in Fullstack development, seeking backend/API developer position in banking sector. Skilled in Java Spring Boot, Python, Node.js, Cloud (AWS, Azure, Cloudflare), Database (SQL Server, PostgreSQL), and DevOps (Docker, Terraform). More than 3 months fullstack internship at ERA Group.',
      vi: 'Kỹ sư Phần mềm có kinh nghiệm Fullstack, tìm vị tríBackend/API Developer tại ngân hàng. Năng lực Java Spring Boot, Python, Node.js, Cloud (AWS, Azure, Cloudflare), Cơ sở dữ liệu (SQL Server, PostgreSQL) và DevOps (Docker, Terraform). Thực tập fullstack hơn 3 tháng tại ERA Group.'
    },
    tech: ['Java', 'Spring Boot', 'Python', 'Node.js', 'C#', '.NET', 'ASP.NET', 'SQL Server', 'PostgreSQL', 'AWS', 'Azure', 'Cloudflare', 'Docker', 'Terraform', 'Git', 'GitHub', 'GitLab'],
    github: 'https://github.com/imtarget05',
    image: undefined,
    featured: false,
    order: 7,
    roleFit: { backend: 4, devops: 2, ai: 2, bank: 5, network: 1, erp: 3 },
    problem: 'Looking for appropriate banking position while gaining practical experience and building solid financial foundation for personal and family future.',
    problemVi: 'Tìm vị trí phù hợp tại ngân hàng trong khi tích lũy kinh nghiệm thực tế và xây dựng nền tảng tài chính vững chắc cho bản thân, gia đình.',
    solution: 'Cung cố kiến thức lập trình, thiết kế API, cơ sở dữ liệu và nghiệp vụ ngân hàng; chủ động xử lý công việc và đóng góp hiệu quả cho đội ngũ; gắn bó với ngành ngân hàng dài hạn.',
    solutionVi: 'Củng cố kiến thức lập trình, thiết kế API, cơ sở dữ liệu và nghiệp vụ ngân hàng; xử lý chủ động công việc và đóng góp hiệu quả cho đội ngũ; gắn bó với ngành ngân hàng phát triển sự nghiệp ổn định.',
    architecture: 'Monolithic and Microservices architectures experience with RESTful API design, SQL database management, transaction processing, security and system reliability.',
    engineeringDecisions: ['RESTful API', 'SQL', 'Transaction handling', 'Security measures', 'Performance optimization', 'System reliability'],
    evidence: [],
    limitations: 'Currently seeking employment opportunity in banking sector; limited to documented internship experience at ERA Group (3 months).',
    status: 'Open to job opportunities in banking sector, Ho Chi Minh City, Vietnam.',
    githubUrl: 'https://github.com/imtarget05',
    demoUrl: null,
  },
  {
    id: 'opsbridge',
    title: { en: 'OpsBridge — Event-Driven Operations', vi: 'OpsBridge — Vận hành Sự kiện' },
    category: { en: '.NET Backend / Event-Driven', vi: 'Backend .NET / Hệ thống Sự kiện' },
    roleFit: {
      backend: 5, devops: 3, ai: 2, bank: 3, network: 1, erp: 3,
    },
    description: {
      en: 'C#/.NET event-driven backend for operations workflows. Message-based architecture with reliable event processing, retry policies, and dead letter handling.',
      vi: 'Backend C#/.NET hướng sự kiện cho luồng vận hành. Kiến trúc dựa trên thông điệp với xử lý sự kiện đáng tin cậy, chính sách thử lại và xử lý hàng đợi lỗi.',
    },
    tech: ['C#', '.NET', 'ASP.NET Core', 'RabbitMQ', 'SQL Server', 'Docker'],
    github: 'https://github.com/imtarget05/OpsBridge',
    image: undefined,
    featured: false,
    order: 8,
    problem: 'Operations workflows that directly mutate shared state are hard to audit and recover from when failures occur.',
    problemVi: 'Các luồng vận hành biến đổi trực tiếp trạng thái chung khó kiểm tra và khôi phục khi lỗi xảy ra.',
    solution: 'Event-driven architecture with message queues, idempotent event handlers, saga patterns for distributed transactions, and dead letter queues for failed message recovery.',
    solutionVi: 'Kiến trúc hướng sự kiện với hàng đợi tin nhắn, xử lý sự kiện idempotent, mẫu saga cho giao dịch phân tán và hàng đợi lỗi để khôi phục tin nhắn thất bại.',
    architecture: 'ASP.NET Core API with RabbitMQ message broker, SQL Server for state store, Docker containerized services, event sourcing for audit trail.',
    engineeringDecisions: [
      'Event-driven architecture for loose coupling between services',
      'Idempotent event handlers for safe retry',
      'Saga pattern for distributed transaction management',
      'Dead letter queue for failed message recovery'
    ],
    evidence: [
      { label: 'README and architecture docs', url: 'https://github.com/imtarget05/OpsBridge/blob/main/README.md' }
    ],
    limitations: 'Documentation reviewed; fresh CI validation and source execution pending.',
    status: 'Documented event-driven architecture; fresh testing pending.',
    githubUrl: 'https://github.com/imtarget05/OpsBridge',
    demoUrl: null,
  },
  {
    id: 'apexinspect-ai',
    title: { en: 'ApexInspect-AI — Industrial Computer Vision', vi: 'ApexInspect-AI — Thị giác Máy công nghiệp' },
    category: { en: 'AI Engineering / Computer Vision', vi: 'Kỹ thuật AI / Thị giác Máy' },
    roleFit: {
      backend: 3, devops: 2, ai: 5, bank: 1, network: 1, erp: 2,
    },
    description: {
      en: 'Industrial computer vision platform with YOLO and ONNX for defect detection. Model export, benchmark interfaces and inference pipelines for manufacturing quality control.',
      vi: 'Nền tảng thị giác máy công nghiệp với YOLO và ONNX cho phát hiện khuyết tật. Xuất mô hình, giao diện benchmark và đường suck ln để kiểm soát chất lượng sản xuất.',
    },
    tech: ['Python', 'YOLO', 'ONNX', 'OpenCV', 'Docker', 'FastAPI'],
    github: 'https://github.com/imtarget05/ApexInspect-AI',
    image: undefined,
    featured: false,
    order: 10,
    problem: 'Manual quality inspection is slow and inconsistent; automated visual defect detection can improve accuracy and throughput.',
    problemVi: 'Kiểm tra chất lượng thủ công chậm và không nhất quán; phát hiện khuyết tắt hình ảnh tự động có thể cải thiện độ chính xác và lượng xử lý.',
    solution: 'YOLO-based object detection with ONNX model export for edge deployment, OpenCV preprocessing pipelines, and FastAPI inference service with benchmark metrics.',
    solutionVi: 'Phát hiện đối tượng dựa trên YOLO với xuất mô hình ONNX cho triển khai biên, đường tiền xử lý OpenCV và dịch vụ suy luận FastAPI với chỉ số benchmark.',
    architecture: 'Python inference service with YOLO/ONNX models, OpenCV for image preprocessing, FastAPI API for inference endpoints, Docker for containerized deployment.',
    engineeringDecisions: [
      'YOLO for real-time object detection',
      'ONNX for cross-platform model deployment',
      'OpenCV for image preprocessing pipelines',
      'FastAPI for low-latency inference API'
    ],
    evidence: [
      { label: 'README and benchmark docs', url: 'https://github.com/imtarget05/ApexInspect-AI/blob/main/README.md' }
    ],
    limitations: 'Target metrics are not independently verified; no production edge latency data available.',
    status: 'Documented pipeline; target metrics not treated as measured results.',
    githubUrl: 'https://github.com/imtarget05/ApexInspect-AI',
    demoUrl: null,
  },
  {
    id: 'adaptiveops',
    title: { en: 'AdaptiveOps — Webhook Reliability', vi: 'AdaptiveOps — Độ tin cậy Webhook' },
    category: { en: 'Backend / Platform Engineering', vi: 'Kỹ thuật Backend / Nền tảng' },
    roleFit: {
      backend: 4, devops: 4, ai: 1, bank: 3, network: 1, erp: 3,
    },
    description: {
      en: 'Webhook reliability platform with release controls, retry logic, idempotency keys and delivery guarantees for event-driven integrations.',
      vi: 'Nền tảng độ tin cậy webhook với kiểm soát phát hành, logic thử lại, khóa idempotency và bảo đảm giao diện cho tích hợp hướng sự kiện.',
    },
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/imtarget05/adaptiveops-platform',
    image: undefined,
    featured: false,
    order: 11,
    problem: 'Webhook delivery failures cause data loss and broken integrations; without retry logic and idempotency, downstream systems become inconsistent.',
    problemVi: 'Lỗi giao diện webhook gây mất dữ liệu và hỏng tích hợp; mà không có logic thử lại và idempotency, hệ thống downstream bị không nhất quán.',
    solution: 'Webhook delivery service with exponential backoff retry, idempotency keys, delivery guarantees, release controls and circuit breaker patterns.',
    solutionVi: 'Dịch vụ giao diện webhook với thử lại backoff mũ, khóa idempotency, bảo đảm giao diện, kiểm soát phát hành và mẫu circuito ngắt.',
    architecture: 'FastAPI webhook receiver with PostgreSQL delivery log, Redis for rate limiting and idempotency cache, Docker containerized deployment.',
    engineeringDecisions: [
      'Exponential backoff retry for transient webhook failures',
      'Idempotency keys to prevent duplicate processing',
      'Circuit breaker pattern for downstream service protection',
      'Release controls for safe deployment of webhook changes'
    ],
    evidence: [
      { label: 'README and architecture docs', url: 'https://github.com/imtarget05/adaptiveops-platform/blob/main/README.md' }
    ],
    limitations: 'Documentation reviewed; fresh CI validation pending.',
    status: 'Documented webhook reliability architecture; fresh testing pending.',
    githubUrl: 'https://github.com/imtarget05/adaptiveops-platform',
    demoUrl: null,
  },
];
