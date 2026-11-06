interface GlassDockProps {
  chapters: { id: string; label: { en: string; vi: string } }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  lang: 'en' | 'vi';
}

export function GlassDock({ chapters, activeIndex, setActiveIndex, lang }: GlassDockProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      {chapters.map((ch, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={ch.id}
            onClick={() => setActiveIndex(i)}
            className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center border ${
              isActive
                ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgb(6,182,212,0.5)] border-cyan-500'
                : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/30'
            }`}
            aria-label={ch.label[lang]}
          >
            <span className="text-xs font-medium">{i + 1}</span>
          </div>
        );
      })}
    </div>
  );
}
