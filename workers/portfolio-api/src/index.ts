/**
 * Portfolio API - Cloudflare Workers
 * 
 * Edge serverless API for serving project data, evidence, and role-based filtering.
 * Runs on Cloudflare Workers global network (~100k free requests/day).
 */

import { projects } from '../../../src/content/data';
import { projectEvidence } from '../../../src/content/projectEvidence';

type RoleKey = 'backend' | 'devops' | 'ai' | 'network' | 'bank' | 'erp';

interface Env {
  CLOUDFLARE_ACCOUNT_ID?: string;
  CLOUDFLARE_API_TOKEN?: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: corsHeaders });
}

function notFound(message = 'Not found'): Response {
  return json({ error: message }, 404);
}

function methodNotAllowed(): Response {
  return json({ error: 'Method not allowed' }, 405);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '');
    const method = request.method;

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (method !== 'GET') {
      return methodNotAllowed();
    }

    if (path === '/api/health') {
      return json({ status: 'ok', service: 'portfolio-api', timestamp: new Date().toISOString() });
    }

    if (path === '/api/projects') {
      const role = url.searchParams.get('role') as RoleKey | null;
      let filtered = projects;

      if (role && ['backend', 'devops', 'ai', 'network', 'bank', 'erp'].includes(role)) {
        filtered = projects.filter(
          (p) => (p.roleFit as Record<string, number>)[role] >= 3
        );
      }

      if (role) {
        filtered.sort(
          (a, b) =>
            (b.roleFit as Record<string, number>)[role] -
            (a.roleFit as Record<string, number>)[role]
        );
      } else {
        filtered = filtered.filter((p) => p.featured).sort(
          (a, b) => (a.order ?? 999) - (b.order ?? 999)
        );
      }

      return json({
        count: filtered.length,
        role,
        projects: filtered.map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          roleFit: p.roleFit,
          description: p.description,
          tech: p.tech,
          featured: p.featured,
          order: p.order,
          githubUrl: p.githubUrl,
          status: p.status,
        })),
      });
    }

    const projectMatch = path.match(/^\/api\/projects\/([a-z0-9-]+)$/);
    if (projectMatch) {
      const projectId = projectMatch[1];
      const project = projects.find((p) => p.id === projectId);
      const evidence = projectEvidence[projectId];

      if (!project) {
        return notFound('Project not found');
      }

      return json({
        ...project,
        evidence: evidence || null,
      });
    }

    const roleMatch = path.match(/^\/api\/roles\/([a-z]+)$/);
    if (roleMatch) {
      const role = roleMatch[1] as RoleKey;
      if (!['backend', 'devops', 'ai', 'network', 'bank', 'erp'].includes(role)) {
        return notFound('Invalid role');
      }

      const filtered = projects
        .filter((p) => (p.roleFit as Record<string, number>)[role] >= 3)
        .sort(
          (a, b) =>
            (b.roleFit as Record<string, number>)[role] -
            (a.roleFit as Record<string, number>)[role]
        );

      return json({
        role,
        label: {
          backend: 'Backend / Software Engineer',
          devops: 'DevOps / Cloud Engineer',
          ai: 'AI / GenAI Engineer',
          network: 'Network / Infrastructure Engineer',
          bank: 'Banking Technology Engineer',
          erp: 'ERP / Manufacturing IT',
        }[role],
        count: filtered.length,
        projects: filtered.map((p) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          roleFit: p.roleFit[role],
          description: p.description,
          tech: p.tech.slice(0, 5),
          githubUrl: p.githubUrl,
          status: p.status,
        })),
      });
    }

    const evidenceMatch = path.match(/^\/api\/evidence\/([a-z0-9-]+)$/);
    if (evidenceMatch) {
      const projectId = evidenceMatch[1];
      const evidence = projectEvidence[projectId];

      if (!evidence) {
        return notFound('Evidence not found');
      }

      return json({
        projectId,
        scope: evidence.scope,
        proof: evidence.proof,
        boundary: evidence.boundary,
      });
    }

    if (path === '/api/stats') {
      const featured = projects.filter((p) => p.featured);

      return json({
        publicRepos: 60,
        flagshipProjects: featured.length,
        engineeringDomains: 6,
        totalTestsPassing: 1460,
        roles: ['backend', 'devops', 'ai', 'network', 'bank', 'erp'],
        lastUpdated: new Date().toISOString(),
      });
    }

    return notFound();
  },
} satisfies ExportedHandler<Env>;