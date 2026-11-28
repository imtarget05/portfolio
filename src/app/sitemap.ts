import { MetadataRoute } from 'next';

const baseUrl = 'https://portfolio-of-mainguyenbinhtan.onrender.com';

const roles = ['backend', 'devops', 'ai', 'network', 'bank', 'erp'] as const;
const projects = ['flashsale', 'aks-sre', 'quanlykho', 'incidentiq', 'doc-intelligence', 'minierp', 'opsbridge', 'creditflow', 'apexinspect-ai', 'adaptiveops', 'career-orientation'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const roleRoutes = roles.map((role) => ({
    url: `${baseUrl}/roles/${role}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const evidenceRoutes = projects.map((project) => ({
    url: `${baseUrl}/evidence/${project}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...roleRoutes, ...evidenceRoutes];
}
