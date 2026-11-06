import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import { GlassNavbar } from '@/components/glass/GlassNavbar';
import { GlassDock } from '@/components/glass/GlassDock';
import { Chapter01 } from '@/sections/Chapter01';
import { Chapter02 } from '@/sections/Chapter02';
import { Chapter03 } from '@/sections/Chapter03';
import { Chapter04 } from '@/sections/Chapter04';

const chapters = [
  { id: 'chapter-01', label: { en: 'Introduction', vi: 'Giới thiệu' }, offset: 0 },
  { id: 'chapter-02', label: { en: 'Explore', vi: 'Khám phá' }, offset: 1 },
  { id: 'chapter-03', label: { en: 'Experience', vi: 'Trải nghiệm' }, offset: 2 },
  { id: 'chapter-04', label: { en: 'Final Scene', vi: 'Cảnh cuối' }, offset: 3 },
];

export function App() {
  const [lang, setLang] = useState<'en' | 'vi'>('en');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('immersive-lang');
    if (saved === 'en' || saved === 'vi') setLang(saved);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  // Determine active chapter based on scroll progress (0 to 1 mapped to 4 chapters)
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const activeProgress = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  useEffect(() => {
    const handler = () => {
      const p = Math.round(activeProgress.get());
      if (p !== activeIndex && p >= 0 && p <= 3) {
        setActiveIndex(p);
      }
    };
    // Poll since useTransform progress isn't directly readable imperatively
    const id = requestAnimationFrame(function loop() {
      handler();
      return requestAnimationFrame(loop);
    });
    return () => cancelAnimationFrame(id);
  }, [activeIndex, activeProgress]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <GlassNavbar lang={lang} setLang={setLang} chapters={chapters} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <main ref={scrollRef} className="relative h-full w-full overflow-y-auto scroll-smooth no-scrollbar">
        <div className="h-screen w-full flex flex-col">
          <Chapter01 lang={lang} />
          <Chapter02 lang={lang} />
          <Chapter03 lang={lang} />
          <Chapter04 lang={lang} />
        </div>
      </main>
      <GlassDock chapters={chapters} activeIndex={activeIndex} setActiveIndex={setActiveIndex} lang={lang} />
    </div>
  );
}
