'use client'

import { useLang } from './LanguageProvider'
import { BarChart3, Layers, ShieldCheck, Code, Terminal, Database } from 'lucide-react'

const stats = [
  {
    icon: Code,
    number: '60',
    label: { en: 'Public repositories', vi: 'Kho lưu trữ công khai' },
  },
  {
    icon: Layers,
    number: '3',
    label: { en: 'Flagship projects', vi: 'Dự án chủ lực' },
  },
  {
    icon: ShieldCheck,
    number: '5+',
    label: { en: 'Engineering domains', vi: 'Lĩnh vực kỹ thuật' },
  },
  {
    icon: Database,
    number: '1,460+',
    label: { en: 'Tests passing', vi: 'Test đạt' },
  },
]

export function EngineeringStats() {
  const { lang } = useLang()
  return (
    <section id="stats" className="section stats-section py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card border border-border/60 rounded-xl p-6 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground mb-4">
                <stat.icon size={20} />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
