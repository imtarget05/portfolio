import { useRef, useEffect, useState, useCallback } from 'react';

// Tracks scroll progress (0..1) across 4 equal-height sections and maps to chapter index.
// Also exposes camera position/lookAt targets for the scene.
export function useChapterScroll(activeChapterIndex: number) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>();
  const tickingRef = useRef(false);

  const waypoints = [
    { pos: [0, 12, 28] as [number, number, number], look: [0, 2, -6] as [number, number, number] },
    { pos: [4, 10, 18] as [number, number, number], look: [0, 1, -4] as [number, number, number] },
    { pos: [-6, 8, 12] as [number, number, number], look: [0, 0, -2] as [number, number, number] },
    { pos: [0, 6, 10] as [number, number, number], look: [0, 1, -8] as [number, number, number] },
  ];

  const getChapterFromScroll = useCallback((): number => {
    if (typeof window === 'undefined') return 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const maxScroll = Math.max(document.documentElement.scrollHeight - windowHeight, 1);
    const raw = scrollTop / maxScroll;
    const clamped = Math.max(0, Math.min(1, raw));
    return Math.floor(clamped * 4);
  }, []);

  const update = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    rafRef.current = requestAnimationFrame(() => {
      const chapter = getChapterFromScroll();
      // Compute progress within chapter (0..1)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight;
      const chapterStart = chapter * sectionHeight;
      const progress = Math.max(0, Math.min(1, (scrollTop - chapterStart) / sectionHeight));
      setScrollProgress(progress);
      tickingRef.current = false;
    });
  }, [getChapterFromScroll]);

  useEffect(() => {
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      cancelAnimationFrame(rafRef.current!);
    };
  }, [update]);

  const currentWaypoint = waypoints[Math.min(activeChapterIndex, waypoints.length - 1)];
  const nextWaypoint = waypoints[Math.min(activeChapterIndex + 1, waypoints.length - 1)];

  const interpolate = (a: number[], b: number[], t: number) =>
    a.map((v, i) => v + (b[i] - v) * t) as [number, number, number];

  return {
    scrollProgress,
    cameraPosition: interpolate(currentWaypoint.pos, nextWaypoint.pos, scrollProgress),
    cameraLookAt: interpolate(currentWaypoint.look, nextWaypoint.look, scrollProgress),
    chapterFromScroll: getChapterFromScroll(),
  };
}
