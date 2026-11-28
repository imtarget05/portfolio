'use client'

import { useEffect, useState } from 'react'
import { useLang } from './LanguageProvider'
import { BarChart3, Layers, ShieldCheck, Code, Terminal, Database } from 'lucide-react'

// Fallback stats khi chưa fetch được API
const defaultStats = {
  publicRepos: '60',
  flagshipProjects: '3',
  engineeringDomains: '5+',
  totalTestsPassing: '1,460+',
}

export function EngineeringStats() {
  const { lang } = useLang()
  const [stats, setStats] = useState<{
    publicRepos: string
    flagshipProjects: string
    engineeringDomains: string
    totalTestsPassing: string
  }>(defaultStats)

  useEffect(() => {
    // Fetch stats from Cloudflare Workers API
    // Nếu chưa triển khai Workers, fallback vào default values
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        setStats({
          publicRepos: data.publicRepos,
          flagshipProjects: data.flagshipProjects,
          engineeringDomains: data.engineeringDomains,
          totalTestsPassing: data.totalTestsPassing,
        })
      })
      .catch(() => {
        // Fallback to defaults if API not deployed yet
        setStats(defaultStats)
      })
  }, [lang])

  return (
    <section id="stats" className="section stats-section py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: { en: 'Public repositories', vi: 'Kho lưu trữ công khai' } },
            { icon: Layers, label: { en: 'Flagship projects', vi: 'Dự án chủ lực' } },
            { icon: ShieldCheck, label: { en: 'Engineering domains', vi: 'Lĩnh vực kỹ thuật' } },
            { icon: Database, label: { en: 'Tests passing', vi: 'Test đạt' } },
          ].map((item, i) => (
            <div
              key={i}
              className="stat-card border border-border/60 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground mb-4">
                <item.icon size={20} />
              </div>
              <div className="text-3xl font-bold text-foreground">{stats[item.icon === Code ? 'publicRepos' : item.icon === Layers ? 'flagshipProjects' : item.icon === ShieldCheck ? 'engineeringDomains' : 'totalTestsPassing']}</div>
              <div className="text-sm text-muted-foreground mt-2">
                {item.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
