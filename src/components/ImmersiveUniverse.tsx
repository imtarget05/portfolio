'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from './LanguageProvider';
import { Database, Package, Activity, Server } from 'lucide-react';
import Link from 'next/link';

const projectNodes = [
  {
    id: 'flashsale',
    title: { en: 'FlashSale Backend', vi: 'FlashSale Backend' },
    icon: Activity,
    color: 'bg-primary/10 text-primary border-primary/20',
    tech: { en: 'Java · Spring Boot · PostgreSQL · Redis · RabbitMQ', vi: 'Java · Spring Boot · PostgreSQL · Redis · RabbitMQ' },
    desc: { en: 'Concurrent transaction processing with atomic inventory and event outbox.', vi: 'Xử lý giao dịch đồng thời với tồn kho nguyên tử và sự kiện outbox.' },
  },
  {
    id: 'aks-sre',
    title: { en: 'AKS SRE Platform', vi: 'AKS SRE Platform' },
    icon: Server,
    color: 'bg-accent/10 text-accent border-accent/20',
    tech: { en: 'Kubernetes · Terraform · Argo CD · OpenTelemetry · Azure', vi: 'Kubernetes · Terraform · Argo CD · OpenTelemetry · Azure' },
    desc: { en: 'Infrastructure as Code, GitOps, and observability on Azure Kubernetes Service.', vi: 'Hạ tầng dưới dạng mã, GitOps và quan sát trên Azure Kubernetes Service.' },
  },
  {
    id: 'quanlykho',
    title: { en: 'QuanLyKho', vi: 'QuanLyKho' },
    icon: Package,
    color: 'bg-primary/10 text-primary border-primary/20',
    tech: { en: 'Python · FastAPI · PostgreSQL · Flutter · Docker', vi: 'Python · FastAPI · PostgreSQL · Flutter · Docker' },
    desc: { en: 'Enterprise inventory and treasury with double-entry bookkeeping.', vi: 'Tồn kho và sổ tài doanh nghiệp với sổ cái kép.' },
  },
];

export function ImmersiveUniverse() {
  const { lang } = useLang();
  const reducedMotion = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);

  if (reducedMotion) {
    return <ImmersiveFallback />;
  }

  return (
    <div className="relative w-full h-[600px] min-h-[400px] rounded-2xl border border-border bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-card/50 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[64px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[64px]" />
      </div>

      <div className="relative z-10 h-full p-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-full">
          {projectNodes.map((node, i) => {
            const angle = (i / projectNodes.length) * Math.PI * 2;
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius * 0.6;
            const isSelected = selected === node.id;

            return (
              <motion.div
                key={node.id}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(selected === node.id ? null : node.id)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className={`w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${node.color} ${isSelected ? 'ring-2 ring-primary scale-110' : ''} shadow-lg`}
                >
                  <node.icon size={24} strokeWidth={2.5} />
                  <span className="text-xs font-bold text-foreground">{node.title.en}</span>
                </motion.div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64"
                  >
                    <div className="bg-card border border-border rounded-xl p-5 shadow-xl">
                      <h3 className="font-bold text-foreground mb-1">{node.title.en}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{node.desc.en}</p>
                      <div className="flex flex-wrap gap-1">
                        {node.tech.en.split(' · ').map((t) => (
                          <span key={t} className="px-2 py-1 rounded border border-border/60 bg-background text-[10px] font-medium">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {projectNodes.map((node) => (
          <button
            key={node.id}
            onClick={() => setSelected(selected === node.id ? null : node.id)}
            className={`w-2 h-2 rounded-full transition-all ${selected === node.id ? 'w-12 bg-primary' : 'bg-muted-foreground/40 hover:bg-muted-foreground'}`}
          />
        ))}
      </div>
    </div>
  );
}

export function ImmersiveFallback() {
  const { lang } = useLang();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-secondary rounded-2xl border border-border p-8">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        {lang === 'en' ? '2D fallback view — reduced motion or WebGL unavailable.' : 'Chế độ 2D dự phòng — giảm chuyển động hoặc WebGL không khả dụng.'}
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {projectNodes.map((node) => (
          <div
            key={node.id}
            onClick={() => setSelected(selected === node.id ? null : node.id)}
            className={`cursor-pointer p-4 rounded-xl border border-border/60 bg-card transition-all hover:border-primary/50 ${selected === node.id ? 'bg-primary/10' : ''}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-3 ${node.color}`}>
              <node.icon size={20} strokeWidth={2.5} />
            </div>
            <h4 className="font-bold text-foreground mb-2">{node.title.en}</h4>
            <p className="text-xs text-muted-foreground">{node.desc.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImmersiveContent() {
  const { lang } = useLang();

  return (
    <section className="section" id="immersive">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="eyebrow">07 / {lang === 'en' ? 'IMMERSIVE 3D' : '3D ĐẦY ĐỦ'}</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
            {lang === 'en' ? <>Engineering<br /><span className="gradient-text">Universe.</span></> : <>Hệ sinh thái<br /><span className="gradient-text">Kỹ thuật.</span></>}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Interactive 3D architecture simulations for our three flagship projects. Switch to 2D fallback for reduced-motion or low-capability devices.'
              : 'Mô phỏng kiến trúc 3D tương tác cho ba dự án chủ lực. Chuyển sang giao diện 2D dự phòng cho thiết bị giảm chuyển động hoặc năng lực thấp.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <ImmersiveUniverse />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{lang === 'en' ? 'FlashSale Backend' : 'FlashSale Backend'}</h3>
              <p className="text-sm text-muted-foreground mb-4">{lang === 'en' ? 'Concurrent transaction processing with Redis atomic inventory, PostgreSQL outbox, RabbitMQ event relay.' : 'Xử lý giao dịch đồng thời với tồn kho nguyên tử Redis, outbox PostgreSQL, 중계 sự kiện RabbitMQ.'}</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Java</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Spring Boot</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">PostgreSQL</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Redis</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">RabbitMQ</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{lang === 'en' ? 'AKS SRE Platform' : 'AKS SRE Platform'}</h3>
              <p className="text-sm text-muted-foreground mb-4">{lang === 'en' ? 'Infrastructure as Code with Terraform, Argo CD GitOps, OpenTelemetry observability on Azure AKS.' : 'Hạ tầng dưới dạng mã với Terraform, Argo CD GitOps, quan sát OpenTelemetry trên Azure AKS.'}</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Kubernetes</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Terraform</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Argo CD</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">OpenTelemetry</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Azure</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">{lang === 'en' ? 'QuanLyKho — Inventory & Treasury' : 'QuanLyKho — Quản lý kho & Sổ tài'}</h3>
              <p className="text-sm text-muted-foreground mb-4">{lang === 'en' ? 'Enterprise warehouse management with FastAPI, PostgreSQL, Flutter, double-entry bookkeeping, Maker–Checker.' : 'Quản lý kho doanh nghiệp với FastAPI, PostgreSQL, Flutter, sổ cái kép, Người tạo–Người duyệt.'}</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Python</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">FastAPI</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">PostgreSQL</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Flutter</span>
                <span className="px-2 py-1 rounded border border-border/60 bg-background text-xs">Docker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg transition-all hover:scale-[1.02]">
            {lang === 'en' ? 'Back to Home' : 'Về trang chủ'}
          </Link>
          <Link href="/projects/flashsale" className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg transition-all hover:bg-secondary">
            {lang === 'en' ? 'View Case Study' : 'Xem Case Study'}
          </Link>
        </div>
      </div>
    </section>
  );
}
