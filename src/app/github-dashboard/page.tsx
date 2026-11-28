'use client';

import { useEffect, useState, useCallback } from 'react';
import { useLang, LanguageProvider } from '@/components/LanguageProvider';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Star, Clock, Code, Folder, Zap } from 'lucide-react';

const GITHUB_USER = 'imtarget05';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  size: number;
  open_issues_count: number;
  default_branch: string;
}

interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
}

function GitHubDashboardContent() {
  const { lang } = useLang();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const userRes = await fetch(
        `https://api.github.com/users/${GITHUB_USER}`,
        { headers: { Accept: 'application/vnd.github.v3+json' } },
      );
      const reposRes = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=10`,
        { headers: { Accept: 'application/vnd.github.v3+json' } },
      );

      if (!userRes.ok || !reposRes.ok) {
        throw new Error('GitHub API request failed');
      }

      const userData: GitHubUser = await userRes.json();
      const reposData: GitHubRepo[] = await reposRes.json();

      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load GitHub data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatDate = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const langSet = new Set<string>();
  repos.forEach((r) => {
    if (r.language) langSet.add(r.language);
  });
  const topLanguages = Array.from(langSet).slice(0, 6);

  return (
    <section className="section" id="github-dashboard">
      <div className="container-custom">
        <div className="mb-12">
          <p className="eyebrow">
            {lang === 'en' ? 'GITHUB DASHBOARD' : 'BẢNG DIỄM GITHUB'}
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            {lang === 'en' ? (
              <>
                Live <br />
                <span className="gradient-text">GitHub Activity.</span>
              </>
            ) : (
              <>
                Hoạt động <br />
                <span className="gradient-text">GitHub.</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {lang === 'en'
              ? 'Live data from the GitHub REST API. Public repositories, recent activity, and contribution metrics for imtarget05.'
              : 'Dữ liệu trực tiếp từ GitHub REST API. Các kho lưu trữ công khai, hoạt động gần đây và chỉ số đóng góp cho imtarget05.'}
          </p>
        </div>

        {error && (
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <p className="text-muted-foreground text-sm">{error}</p>
            <p className="text-xs text-muted-foreground mt-2">
              {lang === 'en'
                ? 'GitHub API rate limit may apply. Try again shortly.'
                : 'Giới hạn gọi API GitHub có thể áp dụng. Hãy thử lại sau.'}
            </p>
          </div>
        )}

        {!loading && user && (
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <Github size={24} className="text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {lang === 'en' ? 'Public Repos' : 'Kho công khai'}
                  </span>
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {user.public_repos}
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <Star size={24} className="text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {lang === 'en' ? 'Followers' : 'Người theo dõi'}
                  </span>
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {user.followers}
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <Code size={24} className="text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {lang === 'en' ? 'Following' : 'Đang theo dõi'}
                  </span>
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {user.following}
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <Zap size={24} className="text-accent" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {lang === 'en' ? 'Top Languages' : 'Ngôn ngữ chính'}
                  </span>
                </div>
                <div className="mt-2 text-3xl font-bold text-foreground">
                  {topLanguages.length}
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-border shrink-0">
                <Image src={user.avatar_url} alt={user.login} width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Link
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-foreground hover:underline"
                  >
                    {user.login}
                  </Link>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-semibold uppercase">
                    {lang === 'en' ? 'VERIFIED ENGINEER' : 'KỸ SƯ'}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {user.bio ||
                    (lang === 'en'
                      ? 'Software & Cloud Engineer based in Ho Chi Minh City, Vietnam.'
                      : 'Kỹ sư Phần mềm & Đám mây tại TP. Hồ Chí Minh, Việt Nam.')}
                </p>
                <div className="flex gap-4">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Github size={16} />
                    {lang === 'en' ? 'View on GitHub' : 'Xem GitHub'}
                  </a>
                  <Link
                    href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Folder size={16} />
                    {lang === 'en' ? 'All Repositories' : 'Tất cả kho lưu trữ'}
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">
                    {lang === 'en' ? 'Recent Repositories' : 'Kho lưu trữ gần đây'}
                  </h3>
                  <Link
                    href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    {lang === 'en' ? 'View all →' : 'Xem tất cả →'}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-border/40">
                {repos.map((repo) => (
                  <div key={repo.id} className="p-6 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <Link
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-foreground hover:underline mb-1"
                        >
                          {repo.name}
                        </Link>
                        {repo.description && (
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {repo.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                            {repo.language || 'N/A'}
                          </span>
                          <span className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                            {repo.stargazers_count}★
                          </span>
                          <span className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                            {repo.forks_count} fork
                          </span>
                          <span className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                            {formatDate(repo.updated_at)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-primary">
                          {repo.open_issues_count}
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          {lang === 'en' ? 'issues' : 'vấn đề'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-muted-foreground text-sm">
              {lang === 'en' ? 'Loading GitHub data…' : 'Đang tải dữ liệu GitHub…'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function GitHubDashboardPage() {
  return (
    <LanguageProvider>
      <GitHubDashboardContent />
    </LanguageProvider>
  );
}
