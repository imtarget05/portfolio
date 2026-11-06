import { Suspense } from 'react';
import { Scene } from '@/experience/scene/Scene';

interface SceneWrapperProps {
  chapterIndex: number;
}

export function SceneWrapper({ chapterIndex }: SceneWrapperProps) {
  return <Suspense fallback={null}><Scene chapterIndex={chapterIndex} /></Suspense>;
}
