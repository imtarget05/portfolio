'use client';

import { useEffect, useState, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  diagram: string;
  className?: string;
}

export function MermaidDiagram({ diagram, className }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#bb6044',
        primaryTextColor: '#1b2020',
        primaryBorderColor: '#7a4a3c',
        lineColor: '#5c625b',
        secondaryColor: '#f3eee5',
        tertiaryColor: '#fff',
      },
      securityLevel: 'loose',
      flowchart: {
        curve: 'basis',
        htmlLabels: true,
        nodeSpacing: 50,
        rankSpacing: 70,
      },
    });

    const renderMermaid = async () => {
      try {
        const { svg } = await mermaid.render('mermaid-' + Math.random().toString(36).slice(2), diagram);
        setSvg(svg);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Mermaid render failed');
        setSvg(null);
      }
    };

    renderMermaid();
  }, [diagram]);

  if (error) {
    return (
      <div className={`bg-secondary border border-border rounded-lg p-4 text-xs text-muted-foreground overflow-auto ${className ?? ''}`}>
        <p>Architecture diagram could not be rendered.</p>
        <pre className="mt-2 text-xs break-all">{error}</pre>
        <details className="mt-3">
          <summary className="cursor-pointer text-primary">View diagram source</summary>
          <pre className="mt-2 text-xs break-all bg-card p-3 rounded border border-border/40">{diagram}</pre>
        </details>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`h-48 flex items-center justify-center text-muted-foreground ${className ?? ''}`}>
        <p>Rendering architecture…</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`bg-card border border-border rounded-lg overflow-auto max-h-[600px] ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
