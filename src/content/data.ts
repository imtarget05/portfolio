
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
    degree: { en: 'Bachelor of Software Engineering', vi: 'Cử nhân Kỹ thuật Phần mềm' },
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
    image: '/images/certificates/Screenshot 2026-10-28 at 20.11.14.png',
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
    image: '/images/certificates/Screenshot 2026-10-28 at 20.15.57.png',
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
  description: { en: string; vi: string };
  tech: string[];
  github: string;
  image?: string;
  featured: boolean;
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
  projects: { en: 'Projects', vi: 'Dự án' },
  tech: { en: 'Tech Stack', vi: 'Công nghệ' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm' },
  services: { en: 'Services', vi: 'Dịch vụ' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
};

export const hero = {
  headline: {
    en: 'Software Engineer — Backend, Cloud Infrastructure & Applied AI',
    vi: 'Kỹ sư phần mềm — Backend, Hạ tầng đám mây & AI ứng dụng',
  },
  subheadline: {
    en: "I'm a Fullstack Software Engineer specializing in backend development, cloud infrastructure, and AI-powered applications.",
    vi: "Tôi là kỹ sư phần mềm tập trung vào backend, hạ tầng đám mây và ứng dụng AI.",
  },
  cta: {
    en: 'Have a project in mind? Let’s build something great.',
    vi: 'Có dự án nào trong đầu? Hãy cùng xây dựng điều tuyệt vời.',
  },
  buttonWork: { en: 'View My Work', vi: 'Xem công việc của tôi' },
  buttonContact: { en: "Let's Work Together", vi: 'Hãy làm việc cùng nhau' },
};

export const about = {
  title: { en: 'About Me', vi: 'Về Tôi' },
  introEn: `I'm a Fullstack Software Engineer specializing in backend development, cloud infrastructure, and AI-powered applications. I build scalable, reliable software systems that solve real business problems — from enterprise applications and distributed services to intelligent automation.`,
  introVi: `Tôi là kỹ sư phần mềm tập trung vào backend, hạ tầng đám mây và ứng dụng AI. Tôi xây dựng các giải pháp phần mềm giải quyết bài toán thực tế của doanh nghiệp, từ ứng dụng quản lý, hệ thống phân tán đến tự động hóa thông minh.`,
  focusEn: `My focus is on clean architecture, performance, maintainability, and delivering practical solutions from development to deployment.`,
  focusVi: `Tôi chú trọng kiến trúc rõ ràng, hiệu năng, khả năng bảo trì và khả năng triển khai vận hành thực tế.`,
};

export const expertise = {
  title: { en: 'Expertise', vi: 'Chuyên Môn' },
  items: [
    {
      title: { en: 'Fullstack Development', vi: 'Phát triển Fullstack' },
      desc: { en: 'Websites, web applications, mobile apps and admin dashboards.', vi: 'Website, ứng dụng web, ứng dụng di động và dashboard quản trị.' },
    },
    {
      title: { en: 'Backend & Software Engineering', vi: 'Backend & Kỹ thuật Phần mềm' },
      desc: { en: 'REST API, microservices, distributed systems, databases, authentication & business logic.', vi: 'REST API, microservices, hệ thống phân tán, cơ sở dữ liệu, xác thực và logic nghiệp vụ.' },
    },
    {
      title: { en: 'Cloud & DevOps', vi: 'Cloud & DevOps' },
      desc: { en: 'Docker, Kubernetes, CI/CD, Azure, AWS, monitoring and deployment.', vi: 'Docker, Kubernetes, CI/CD, Azure, AWS, giám sát và triển khai.' },
    },
    {
      title: { en: 'AI Integration & Automation', vi: 'Tích hợp AI & Tự động hóa' },
      desc: { en: 'LLM, RAG, AI Agents, workflow automation and AI integration for enterprises.', vi: 'LLM, RAG, AI Agents, tự động hóa quy trình và tích hợp AI vào phần mềm doanh nghiệp.' },
    },
  ],
};

export const projects = [
  {
    id: 'flashsale',
    title: { en: 'FlashSale & OpsBridge', vi: 'FlashSale & OpsBridge' },
    category: { en: 'Backend Engineering / Distributed Systems', vi: 'Kỹ thuật Backend / Hệ thống Phân tán' },
    description: {
      en: 'High-traffic e-commerce system for Flash Sale events. Order processing, concurrent inventory management, payments, transactions, and data consistency. Integrated CI/CD, automated testing, and reliability engineering.',
      vi: 'Hệ thống thương mại điện tử cao lưu lượng cho các đợt Flash Sale. Xử lý đơn hàng, quản lý tồn kho đồng thời, thanh toán, giao dịch và đảm bảo nhất quán dữ liệu. Tích hợp CI/CD, kiểm thử tự động và engineering độ tin cậy.',
    },
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/imtarget05/FlashSale-Backend',
    image: undefined,
    featured: true,
    problem: 'Concurrent checkouts can oversell inventory; asynchronous workers can lose, duplicate or indefinitely retry business events.',
    problemVi: 'Nhiều lượt thanh toán cùng lúc có thể bán vượt tồn kho; tác vụ bất đồng bộ có thể làm mất, lặp hoặc liên tục xử lý lại sự kiện nghiệp vụ.',
    solution: 'Uses stock-conservation checks, Redis/Lua and PostgreSQL concurrency control, transactional outbox/inbox patterns, DLQ replay, RBAC and Clean Architecture boundaries. OpsBridge owns operations workflows without directly mutating FlashSale order state.',
    solutionVi: 'Kiểm soát tồn kho bằng Redis/Lua và PostgreSQL; dùng outbox/inbox, hàng đợi lỗi, phân quyền và ranh giới kiến trúc rõ ràng. OpsBridge xử lý vận hành mà không sửa trực tiếp trạng thái đơn hàng của FlashSale.',
    architecture: 'Clean Architecture with separated bounded contexts. FlashSale handles order reliability; OpsBridge manages operations workflows independently. Event-driven communication via RabbitMQ with outbox/inbox pattern for eventual consistency.',
    engineeringDecisions: [
      'Redis Lua scripts for atomic inventory decrement under concurrent load',
      'Transactional outbox pattern to decouple domain events from API responses',
      'DLQ (Dead Letter Queue) with retry and reconciliation workflows',
      'Clean Architecture boundaries between order and operations contexts'
    ],
    evidence: [
      { label: 'Recruiter evidence and caveats', url: 'https://github.com/imtarget05/FlashSale-Backend/blob/main/docs/RECRUITER-EVIDENCE.md' },
      { label: 'Operations CI evidence', url: 'https://github.com/imtarget05/FlashSale-Backend/blob/main/docs/evidence/ci-verification.md' },
      { label: 'Latest recorded main CI failure (25 Oct 2026)', url: 'https://github.com/imtarget05/FlashSale-Backend/actions/runs/40175961211' }
    ],
    limitations: 'Payment provider is simulated; Kubernetes production overlay is not proof of a live production deployment. FlashSale and OpsBridge share code/history, so they count as one portfolio case study. Latest main CI checked on 25 October 2026 failed.',
    status: 'Local order-conservation and historical CI proof; latest FlashSale main CI run checked on 2026-10-25 was failing. Re-run on the current commit before claiming a green CI or guaranteed exact 10/40.',
    githubUrl: 'https://github.com/imtarget05/FlashSale-Backend',
    demoUrl: null,
  },
  {
    id: 'quanlykho',
    title: { en: 'QuanLyKho', vi: 'QuanLyKho' },
    category: { en: 'Enterprise Application / Mobile / Data Engineering', vi: 'Ứng dụng Doanh nghiệp / Di động / Kỹ thuật Dữ liệu' },
    description: {
      en: 'Warehouse management application tracking inbound/outbound, inventory, suppliers and operational costs. Backend API, database, data pipeline with MLflow, and cloud scalability.',
      vi: 'Ứng dụng quản lý kho theo dõi nhập xuất hàng, tồn kho, nhà cung cấp và chi phí vận hành. Backend API, cơ sở dữ liệu, pipeline dữ liệu với MLflow và khả năng mở rộng trên cloud.',
    },
    tech: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Apache Airflow', 'MLflow', 'Kubernetes'],
    github: 'https://github.com/imtarget05/QuanLyKho',
    image: undefined,
    featured: true,
    problem: 'Warehouse records, approvals and exceptions become unreliable when inventory updates and operational decisions are not controlled and traceable.',
    problemVi: 'Dữ liệu kho, phê duyệt và ngoại lệ dễ thiếu tin cậy khi thay đổi tồn kho và quyết định vận hành không được kiểm soát, truy vết.',
    solution: 'Combines Flutter operations screens with a FastAPI/PostgreSQL business API, role-based actions, maker–checker approvals, inventory history and audit-oriented financial-operations simulations. Related modules explore Airflow/MLflow-based data workflows.',
    solutionVi: 'Kết hợp giao diện Flutter với API FastAPI/PostgreSQL, phân quyền, quy trình người tạo–người duyệt và lịch sử tồn kho. Các mô phỏng vận hành tài chính phục vụ kiểm toán; module Airflow/MLflow thử nghiệm luồng dữ liệu riêng.',
    architecture: 'Flutter frontend communicating with FastAPI backend via REST API. PostgreSQL as primary data store with audit trails. Airflow/MLflow modules for data pipeline orchestration are optional and separately deployed.',
    engineeringDecisions: [
      'Flutter for mobile-first operations UX with controlled API access',
      'FastAPI with PostgreSQL for transactional business logic and auditability',
      'Maker-checker approval flow with RBAC for role-based operations',
      'Audit-oriented data model with immutable operation history'
    ],
    evidence: [
      { label: 'README and scope disclaimers', url: 'https://github.com/imtarget05/QuanLyKho/blob/main/README.md' },
      { label: 'Employee app design evidence', url: 'https://github.com/imtarget05/QuanLyKho/blob/main/docs/employee-app/README.md' },
      { label: 'Recorded 25 Oct CI success', url: 'https://github.com/imtarget05/QuanLyKho/actions/runs/40163909013' }
    ],
    limitations: 'Simulated financial operations: not banking software, not a live financial integration, and not a real-money application. Cloud/ML components must not be described as fully production-proven.',
    status: 'Selected workflow successes and recorded tests; branch/commit-specific status, not a production guarantee.',
    githubUrl: 'https://github.com/imtarget05/QuanLyKho',
    demoUrl: null,
  },
  {
    id: 'doc-intelligence',
    title: { en: 'Enterprise Document Intelligence', vi: 'Trí tuệ Tài liệu Doanh nghiệp' },
    category: { en: 'AI Application / Fullstack / Agentic AI', vi: 'Ứng dụng AI / Fullstack / Agentic AI' },
    description: {
      en: 'Enterprise document management and AI extraction platform. Semantic search, document Q&A, Corrective RAG, hybrid search and multi-agent orchestration.',
      vi: 'Nền tảng quản lý và khai thác tài liệu doanh nghiệp bằng AI. Tìm kiếm ngữ nghĩa, hỏi đáp tài liệu, Corrective RAG, hybrid search và điều phối multi-agent.',
    },
    tech: ['React', 'Java Spring Boot', 'Python', 'FastAPI', 'LangGraph', 'Qdrant', 'Ollama', 'Docker'],
    github: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform',
    image: undefined,
    featured: true,
    problem: 'Enterprise document search must handle ambiguous queries, mixed-language content and insufficient evidence while maintaining secure API boundaries.',
    problemVi: 'Tìm kiếm tài liệu doanh nghiệp phải xử lý câu hỏi mơ hồ, nội dung đa ngôn ngữ và bằng chứng thiếu hụt, đồng thời giữ ranh giới API an toàn.',
    solution: 'Spring Boot coordinates document and chat APIs; Python services support corrective RAG, dense/sparse retrieval and agent experiments. The web client streams answers and exposes supporting citations. Hybrid Qdrant + BM25 retrieval with reciprocal-rank fusion and corrective verification.',
    solutionVi: 'Spring Boot điều phối API tài liệu và chat; dịch vụ Python thực hiện Corrective RAG, truy xuất dense/sparse và thử nghiệm agent. Giao diện stream câu trả lời kèm trích dẫn; Qdrant và BM25 kết hợp xếp hạng, xác minh lại bằng chứng.',
    architecture: 'Java Spring Boot REST API backend coordinating document services. Python-based AI services for dense/sparse retrieval, corrective RAG, and agent orchestration via LangGraph. Qdrant vector database for hybrid BM25/RRF retrieval. React frontend streaming answers with citation metadata via SSE.',
    engineeringDecisions: [
      'Hybrid Qdrant + BM25 retrieval with reciprocal-rank fusion (RRF) for balanced dense/sparse results',
      'Corrective verification layer to abstain when evidence is insufficient',
      'Streaming SSE responses for progressive answer delivery',
      'Python service separation for AI/ML experiment flexibility'
    ],
    evidence: [
      { label: 'README and deployment boundaries', url: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform/blob/main/README.md' },
      { label: 'Portfolio audit', url: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform/blob/main/docs/PORTFOLIO_ENTERPRISE_AUDIT.md' },
      { label: 'Latest nightly load test failure', url: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform/actions/runs/40173053691' }
    ],
    limitations: 'Azure agent execution and long-lived HITL resume are not verified. The publicly served frontend and backend environments are not all on one confirmed release. Recent nightly load tests failed as of 25 October 2026.',
    status: 'Azure Spring API smoke was recorded on 2026-10-10, but the most recent nightly load tests checked on 2026-10-25 failed.',
    githubUrl: 'https://github.com/imtarget05/Enterprise-Document-Intelligence-Corrective-RAG-Platform',
    demoUrl: null,
  },
  {
    id: 'aks-sre',
    title: { en: 'AKS SRE Platform', vi: 'Nền tảng AKS SRE' },
    category: { en: 'Cloud Engineering / DevOps / SRE', vi: 'Kỹ thuật Cloud / DevOps / SRE' },
    description: {
      en: 'Cloud Native infrastructure platform using IaC and GitOps for automated deployment, configuration and management on Kubernetes. CI/CD, observability, autoscaling, reliability and incident recovery.',
      vi: 'Nền tảng hạ tầng Cloud Native sử dụng Infrastructure as Code và GitOps để tự động hóa triển khai, cấu hình và quản lý ứng dụng trên Kubernetes. CI/CD, quan sát hệ thống, autoscaling, độ tin cậy và khôi phục sự cố.',
    },
    tech: ['Azure', 'AKS', 'Terraform', 'Kubernetes', 'Docker', 'Argo CD', 'GitHub Actions', 'Azure Monitor'],
    github: 'https://github.com/imtarget05/AKS-SRE-Platform',
    image: undefined,
    featured: true,
    problem: 'Reliable cloud operations require repeatable infrastructure, safe deployment changes, recovery paths and observable failure modes.',
    problemVi: 'Vận hành cloud tin cậy cần hạ tầng có thể tái tạo, thay đổi triển khai an toàn, phương án phục hồi và khả năng quan sát lỗi.',
    solution: 'Implements Terraform modules and platform validation, Argo CD reconciliation, rollback/drift exercises and local Prometheus/Grafana alerts. Recorded temporary AKS validation covered private ACR pulls and workload identity.',
    solutionVi: 'Dùng module Terraform, Argo CD để đồng bộ trạng thái, thử rollback và drift, cùng cảnh báo Prometheus/Grafana ở môi trường cục bộ. Bản kiểm chứng AKS tạm thời ghi nhận ACR riêng tư và workload identity.',
    architecture: 'IaC-driven platform with Terraform modules for AKS cluster, node pools, and add-ons. GitOps via Argo CD for desired-state reconciliation. Separate localkind and real-AKS evidence tracks. Gateway API for ingress, Prometheus/Grafana for observability.',
    engineeringDecisions: [
      'Terraform modules for reproducible AKS infrastructure',
      'Argo CD as GitOps engine for deployment reconciliation',
      'Local kind cluster for validated GitOps drift and rollback experiments',
      'Gateway API instead of NGINX Ingress for modern Kubernetes ingress'
    ],
    evidence: [
      { label: 'AKS runtime proof', url: 'https://github.com/imtarget05/AKS-SRE-Platform/blob/main/docs/evidence/phase7a/phase7a-FINAL-PASS.md' },
      { label: 'Platform README and limitations', url: 'https://github.com/imtarget05/AKS-SRE-Platform/blob/main/README.md' },
      { label: 'Latest main PR gate', url: 'https://github.com/imtarget05/AKS-SRE-Platform/actions/runs/40176117176' }
    ],
    limitations: 'No evidence of a continuously running production AKS cluster or sustained SLO history; successful oidc-azure workflow does not automatically prove a live Azure login. Temporary AKS environment was torn down after validation on 21 September 2026.',
    status: 'Temporary real-AKS proof and local kind proofs are distinct; repository CI green in checked main runs on 2026-10-25.',
    githubUrl: 'https://github.com/imtarget05/AKS-SRE-Platform',
    demoUrl: null,
  },
  {
    id: 'minierp',
    title: { en: 'MiniERP — Manufacturing & Warehouse', vi: 'MiniERP — Manufacturing & Warehouse' },
    category: { en: 'Enterprise Applications', vi: 'Ứng dụng Doanh nghiệp' },
    description: {
      en: 'A manufacturing-and-warehouse ERP simulation connecting material lots, production orders, traceability and inventory controls.',
      vi: 'Một ERP mô phỏng kết nối nguyên liệu, đơn sản xuất, truy xuất và kiểm soát tồn kho.',
    },
    tech: ['Oracle', 'PL/SQL', 'C#', 'ASP.NET Core 8', 'Docker', 'GitHub Actions', 'SonarCloud'],
    github: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse',
    image: undefined,
    featured: false,
    problem: 'Factories need lot-level stock accuracy, predictable material allocation and traceable finished-goods movement.',
    problemVi: 'Sản xuất cần tồn kho chính xác theo lô, phân bổ nguyên liệu có thể dự đoán và truy vết thành phẩm.',
    solution: 'Implements lot and FEFO rules, BOM-driven production, atomic inventory updates, genealogy, approvals and ERP-oriented APIs with acceptance exercises. Oracle-backed scenarios include allocation, rollback, lot traceability and guarded restore workflows.',
    solutionVi: 'Áp dụng quy tắc theo lô và FEFO, sản xuất theo BOM, cập nhật tồn kho nguyên tử, truy vết và phê duyệt qua API ERP. Các kịch bản Oracle kiểm tra phân bổ, rollback, truy vết lô và khôi phục có kiểm soát.',
    architecture: 'ASP.NET Core 8 API with Oracle PL/SQL backend for material lot and production order management. Docker containerized deployment with SonarCloud quality gates. FEFO (First Expired, First Out) lot allocation rules with BOM-driven production workflows and genealogy tracking.',
    engineeringDecisions: [
      'Oracle PL/SQL for atomic inventory updates and lot-level traceability',
      'FEFO (First Expired, First Out) allocation rule with BOM-driven production',
      'Atomic inventory updates with guarded restore/test workflows',
      'SonarCloud quality gates for maintainable enterprise code'
    ],
    evidence: [
      { label: 'ERP implementation and test history', url: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse/blob/main/README.md' },
      { label: 'Latest observed CI/CD pipeline failure', url: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse/actions/runs/39091060699' }
    ],
    limitations: 'Demonstration/simulation for manufacturing workflows; no verified customer or live factory deployment. Latest observed CI/CD pipeline failed on 2026-10-18. Historical test counts are README-recorded, not a fresh test run.',
    status: 'Historical test counts are README-recorded, not a fresh test run. Latest observed CI/CD pipeline was failing on 2026-10-18.',
    githubUrl: 'https://github.com/imtarget05/MiniERP-Manufacturing-Warehouse',
    demoUrl: null,
  },
  {
    id: 'supportdesk',
    title: { en: 'SupportDesk — AI Support Operations', vi: 'SupportDesk — Vận hành Hỗ trợ AI' },
    category: { en: 'Applied AI Engineering', vi: 'AI & Tự động hóa' },
    description: {
      en: 'A support platform with ticket workflows, grounded draft generation, model-usage tracing and regression-oriented AI evaluation.',
      vi: 'Nền tảng hỗ trợ với luồng ticket, tạo bản grounded, theo dõi mô hình-usage tracing và đánh giá AI hướng regression.',
    },
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Qdrant', 'LangGraph', 'Temporal'],
    github: 'https://github.com/imtarget05/SupportDesk',
    image: undefined,
    featured: false,
    problem: 'AI-generated support replies can be costly, inconsistent or unsafe without measurable quality and operator review.',
    problemVi: 'Phản hồi hỗ trợ do AI tạo có thể tốn kém, thiếu nhất quán hoặc không an toàn nếu thiếu đo lường chất lượng và kiểm duyệt.',
    solution: 'Combines lifecycle-aware ticket APIs with output guardrails, traceable model cost/latency and an evaluation gate over a labeled dataset. Temporal workflow exists in code but is not verified on a live Temporal cluster; default runner is in-process.',
    solutionVi: 'Kết hợp API vòng đời ticket, rào chắn đầu ra, theo dõi chi phí và độ trễ mô hình, cùng bước đánh giá trên dữ liệu có nhãn. Luồng Temporal mới có trong mã; bộ chạy mặc định vẫn nằm trong tiến trình.',
    architecture: 'FastAPI ticket lifecycle backend with guardrails for model output. Qdrant for retrieval-augmented grounded draft generation. LangGraph for workflow orchestration. Temporal for durable workflow (in-process default runner). Labeled evaluation dataset for regression testing.',
    engineeringDecisions: [
      'Output guardrails with fail-closed policy for unsafe model responses',
      'Per-call cost and p50/p95 latency reporting with traceable model usage',
      'CI regression gate over 92-label evaluation dataset',
      'In-process Temporal default runner for local development; not verified on live cluster'
    ],
    evidence: [
      { label: 'README and Temporal limitations', url: 'https://github.com/imtarget05/SupportDesk/blob/main/README.md' },
      { label: 'CV evidence', url: 'https://github.com/imtarget05/SupportDesk/blob/main/docs/CV_EVIDENCE.md' }
    ],
    limitations: 'Temporal workflow exists in code but is not verified on a live Temporal cluster; default runner is in-process. Demo uses shared API key rather than authenticated per-user identity and audit attribution.',
    status: 'Recorded CI and live API/frontend smoke as of 2026-10-10.',
    githubUrl: 'https://github.com/imtarget05/SupportDesk',
    demoUrl: null,
  },
  {
    id: 'creditflow',
    title: { en: 'CreditFlow — Risk Decision Support', vi: 'CreditFlow — Hỗ trợ quyết định rủi ro' },
    category: { en: 'MLOps & Decision Systems', vi: 'MLOps & Hệ thống quyết định' },
    description: {
      en: 'A demo credit-risk decision-support workflow with cost-sensitive classification, model tracking and human-review states.',
      vi: 'Demo workflow hỗ trợ quyết định rủi ro với phân loại nhạy cảm với chi phí, theo dõi mô hình và trạng thái phê duyệt người dùng.',
    },
    tech: ['Python', 'FastAPI', 'React', 'scikit-learn', 'XGBoost', 'MLflow', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/imtarget05/CreditFlow',
    image: undefined,
    featured: false,
    problem: 'A risk score alone is insufficient without business-cost trade-offs, controlled approvals and traceable model decisions.',
    problemVi: 'Điểm rủi ro riêng lẻ chưa đủ để ra quyết định nếu thiếu cân nhắc chi phí nghiệp vụ, phê duyệt và dấu vết mô hình.',
    solution: 'Evaluates risk models against an asymmetric business cost; exposes a stateful API, audit snapshots and MLflow experiments. State machine with human-review approval states between model prediction and business action.',
    solutionVi: 'Đánh giá mô hình theo chi phí sai lệch không đối xứng; API quản lý trạng thái, lưu bản ghi kiểm toán và thử nghiệm MLflow. Bước duyệt của con người nằm giữa dự đoán và hành động nghiệp vụ.',
    architecture: 'FastAPI backend with scikit-learn and XGBoost model evaluation. MLflow for experiment tracking and model versioning. PostgreSQL for audit snapshots and stateful human-review states. React frontend for model interaction and cost visualization.',
    engineeringDecisions: [
      'Asymmetric business cost model for threshold selection against false positives/negatives',
      'MLflow experiment tracking for model comparison and reproducibility',
      'Stateful API with human-review approval states between prediction and action',
      'Audit snapshots stored in PostgreSQL for compliance and review'
    ],
    evidence: [
      { label: 'README and authentication caveats', url: 'https://github.com/imtarget05/CreditFlow/blob/main/README.md' }
    ],
    limitations: 'Demo uses a shared API key rather than authenticated per-user identity and audit attribution. Not suitable for real lending decisions. Not a banking production approval system.',
    status: 'Code/testing evidence and historical cloud API smoke; not a banking production approval system.',
    githubUrl: 'https://github.com/imtarget05/CreditFlow',
    demoUrl: null,
  },
  {
    id: 'apexinspect',
    title: { en: 'ApexInspect — Industrial Computer Vision', vi: 'ApexInspect — Trực quan học công nghiệp' },
    category: { en: 'Computer Vision', vi: 'Trực quan học' },
    description: {
      en: 'An industrial visual-inspection project covering detection training, model export and inference benchmarking workflows.',
      vi: 'Dự án trực quan học công nghiệp bao gồm training mô hình, xuất model và benchmarking inference.',
    },
    tech: ['Python', 'YOLO', 'ONNX', 'TensorRT', 'OpenCV', 'Docker'],
    github: 'https://github.com/imtarget05/ApexInspect-AI',
    image: undefined,
    featured: false,
    problem: 'Visual-quality workflows must connect labeling, detection, export and latency assessment before edge deployment.',
    problemVi: 'Quy trình kiểm tra chất lượng hình ảnh cần nối dữ liệu gán nhãn, phát hiện, xuất mô hình và đo độ trễ trước khi triển khai ở thiết bị biên.',
    solution: 'Organizes YOLO-format data, training/export scripts and performance measurements for defect-inspection experiments. Dataset conversion and augmentation workflows with model export and inference latency benchmarking interfaces for edge deployment latency assessment.',
    solutionVi: 'Tổ chức dữ liệu YOLO, script huấn luyện/xuất mô hình và đo hiệu năng cho thử nghiệm phát hiện lỗi. Quy trình chuyển đổi, tăng cường dữ liệu và benchmark suy luận hỗ trợ đánh giá độ trễ trên thiết bị biên.',
    architecture: 'Python pipeline processing YOLO-format dataset. YOLO training and ONNX export with TensorRT optimization. OpenCV preprocessing and inference benchmarking interfaces for edge deployment latency assessment.',
    engineeringDecisions: [
      'YOLO-to-ONNX export with TensorRT optimization for edge latency',
      'Dataset conversion and augmentation pipeline for robust training',
      'Inference benchmarking interface with p50/p95 latency reporting',
      'Docker containerization for consistent edge deployment environment'
    ],
    evidence: [
      { label: 'Project README', url: 'https://github.com/imtarget05/ApexInspect-AI/blob/main/README.md' }
    ],
    limitations: 'README metrics marked as targets must not be presented as achieved production results. No fresh model accuracy or production edge SLA was independently verified in this audit.',
    status: 'Repository documents the pipeline; no fresh model accuracy or production edge SLA was independently verified in this audit.',
    githubUrl: 'https://github.com/imtarget05/ApexInspect-AI',
    demoUrl: null,
  },
];
