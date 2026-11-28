// Shared Content Layer — 2D/3D Synchronized
// Used by both Next.js portfolio and Vite immersive 3D app

export type Lang = 'en' | 'vi';

export interface ProjectEvidence {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: Record<Lang, string>;
  category: Record<Lang, string>;
  tech: string[];
  problem: string;
  problemVi?: string;
  solution: string;
  solutionVi?: string;
  evidence: ProjectEvidence[];
  limitations: string;
  status: string;
  featured: boolean;
  order?: number;
  githubUrl?: string;
  github?: string;
  roleFit?: Record<Lang, number>;
  architecture?: string;
  simulations?: string[];
}

export interface ExperienceItem {
  id: string;
  role: Record<Lang, string>;
  company: Record<Lang, string>;
  period: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
}

export interface ArchitectureDiagram {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  mermaid: string;
  simulationData?: Record<string, any>;
}

// Shared projects data — synchronized between Next.js and Vite immersive
export const sharedProjects: Project[] = [
  {
    id: 'flashsale',
    title: { en: 'FlashSale', vi: 'FlashSale' },
    category: { en: 'Distributed System', vi: 'Hệ Thống Phân Tán' },
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
    problem: 'High-concurrency flash sale with inventory race conditions',
    problemVi: 'Giao dịch flash sale với nhiều người dùng cùng lúc, gây cuộc đua tồn kho',
    solution: 'Distributed locking with Redis, outbox pattern, idempotent APIs',
    solutionVi: 'Khóa phân tán với Redis, mẫu outbox, API idempotent',
    evidence: [
      { label: 'GitHub', url: 'https://github.com/imtarget05' },
      { label: 'CI Pipeline', url: 'https://github.com/imtarget05' },
    ],
    limitations: 'Simulated payment gateway; not connected to real banking API',
    status: 'Verified',
    featured: true,
    order: 1,
    roleFit: { en: 5, vi: 5 },
    architecture: 'shared/architectures/flashsale.mmd',
    simulations: ['inventory-race', 'distributed-lock', 'outbox-pattern'],
  },
  {
    id: 'aks-sre-platform',
    title: { en: 'AKS-SRE-Platform', vi: 'AKS-SRE-Platform' },
    category: { en: 'Cloud Infrastructure', vi: 'Cơ Sở Đám Mây' },
    tech: ['Azure', 'AKS', 'Kubernetes', 'Terraform', 'Argo CD', 'Prometheus', 'Grafana'],
    problem: 'Multi-tenant AKS platform with zero-downtime deployments',
    problemVi: 'Nền tảng AKS đa người dùng với triển khai không downtime',
    solution: 'Argo CD GitOps, Terraform IaC, blue-green deployment, observability stack',
    solutionVi: 'Argo CD GitOps, Terraform IaC, triển khai xanh-xanh, stack quan sát',
    evidence: [
      { label: 'GitHub', url: 'https://github.com/imtarget05' },
      { label: 'CI Pipeline', url: 'https://github.com/imtarget05' },
    ],
    limitations: 'AKS cluster torn down; validated locally with kind',
    status: 'Verified',
    featured: true,
    order: 2,
    roleFit: { en: 5, vi: 5 },
    architecture: 'shared/architectures/aks-sre.mmd',
    simulations: ['pod-autoscaling', 'blue-green-deploy', 'observability-stack'],
  },
  {
    id: 'quanlykho',
    title: { en: 'QuanLyKho', vi: 'QuanLyKho' },
    category: { en: 'Enterprise ERP', vi: 'ERP Doanh Nghiệp' },
    tech: ['C#', '.NET', 'SQL Server', 'Entity Framework', 'ASP.NET Core'],
    problem: 'Enterprise warehouse management with complex business rules',
    problemVi: 'Quản lý kho doanh nghiệp với quy tắc nghiệp vụ phức tạp',
    solution: 'Layered architecture, repository pattern, domain-driven design',
    solutionVi: 'Kiến trúc lớp, mẫu repository, thiết kế hướng miền',
    evidence: [
      { label: 'GitHub', url: 'https://github.com/imtarget05' },
      { label: 'CI Pipeline', url: 'https://github.com/imtarget05' },
    ],
    limitations: 'Local validation only; not deployed to production',
    status: 'Verified',
    featured: true,
    order: 3,
    roleFit: { en: 4, vi: 4 },
    architecture: 'shared/architectures/quanlykho.mmd',
    simulations: ['inventory-flow', 'order-processing', 'report-generation'],
  },
  {
    id: 'incidentiq',
    title: { en: 'IncidentIQ', vi: 'IncidentIQ' },
    category: { en: 'Applied AI', vi: 'AI Ứng Dụng' },
    tech: ['Python', 'LangGraph', 'Workers AI', 'Vectorize', 'RAG'],
    problem: 'AI-powered incident triage with RAG',
    problemVi: 'Phân loại sự cố bằng AI với RAG',
    solution: 'LangGraph workflow, Workers AI embeddings, Vectorize vector index',
    solutionVi: 'Luồng LangGraph, nhúng Workers AI, chỉ số vector Vectorize',
    evidence: [
      { label: 'GitHub', url: 'https://github.com/imtarget05' },
      { label: 'Local hybrid run', url: 'https://github.com/imtarget05' },
    ],
    limitations: '30-case local run; not connected to production incident system',
    status: 'Local Verified',
    featured: false,
    order: 4,
    roleFit: { en: 5, vi: 5 },
    architecture: 'shared/architectures/incidentiq.mmd',
    simulations: ['ai-triage', 'rag-retrieval', 'incident-workflow'],
  },
];

export const sharedExperience: ExperienceItem[] = [
  {
    id: 'fullstack-intern',
    role: { en: 'Fullstack Intern', vi: 'Thực tập sinh Fullstack' },
    company: { en: 'ERA Group', vi: 'Công ty TNHH ERA Group' },
    period: { en: '3 months', vi: '3 tháng' },
    description: { en: 'Fullstack development internship contributing to frontend and backend features, API integration, and UI components.', vi: 'Thực tập phát triển fullstack tham gia tính năng frontend và backend, tích hợp API và các thành phần giao diện.' },
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
  },
];

export const sharedArchitectures: ArchitectureDiagram[] = [
  {
    id: 'flashsale-architecture',
    title: { en: 'FlashSale Architecture', vi: 'Kiến Trúc FlashSale' },
    description: { en: 'Distributed flash sale system with inventory locking and outbox pattern', vi: 'Hệ thống flash sale phân tán với khóa tồn kho và mẫu outbox' },
    mermaid: `graph TD
    Client[Client] --> LB[Load Balancer]
    LB --> API[Spring Boot API]
    API --> Lock[Redis Distributed Lock]
    API --> DB[(PostgreSQL)]
    API --> Outbox[Outbox Table]
    Outbox --> Relay[Relay Worker]
    Relay --> MQ[RabbitMQ]
    MQ --> Consumer[Event Consumer]
    style API fill:#e1f5fe,stroke:#01579b
    style DB fill:#fff3e0,stroke:#e65100
    style Lock fill:#f3e5f5,stroke:#4a148c`,
  },
  {
    id: 'aks-sre-architecture',
    title: { en: 'AKS-SRE Platform', vi: 'Nền Tảng AKS-SRE' },
    description: { en: 'Multi-tenant AKS platform with GitOps and observability', vi: 'Nền tảng AKS đa người dùng với GitOps và quan sát' },
    mermaid: `graph TD
    Dev[Developer] --> Git[Git Repository]
    Git --> ArgoCD[Argo CD]
    ArgoCD --> AKS[AKS Cluster]
    AKS --> App[Application Pods]
    App --> Mon[Prometheus + Grafana]
    AKS --> Terraform[Terraform IaC]
    style ArgoCD fill:#e1f5fe,stroke:#01579b
    style AKS fill:#fff3e0,stroke:#e65100
    style Mon fill:#f3e5f5,stroke:#4a148c`,
  },
  {
    id: 'incidentiq-architecture',
    title: { en: 'IncidentIQ AI Triage', vi: 'Phân Loại Sự Cố IncidentIQ' },
    description: { en: 'AI-powered incident triage with RAG and LangGraph', vi: 'Phân loại sự cố bằng AI với RAG và LangGraph' },
    mermaid: `graph TD
    User[User] --> API[Workers API]
    API --> Embed[Workers AI Embedding]
    Embed --> Vec[Vectorize Index]
    Vec --> Retrieve[RAG Retrieval]
    Retrieve --> LangGraph[LangGraph Workflow]
    LangGraph --> Response[AI Response]
    style API fill:#e1f5fe,stroke:#01579b
    style Vec fill:#fff3e0,stroke:#e65100
    style LangGraph fill:#f3e5f5,stroke:#4a148c`,
  },
];

// Contract interface for shared data between 2D and 3D
export interface SharedContentContract {
  version: string;
  projects: Project[];
  experience: ExperienceItem[];
  architectures: ArchitectureDiagram[];
  lastSynced: string;
}

export const sharedContentContract: SharedContentContract = {
  version: '1.0.0',
  projects: sharedProjects,
  experience: sharedExperience,
  architectures: sharedArchitectures,
  lastSynced: new Date().toISOString(),
};
