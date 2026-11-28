import { LanguageProvider } from '@/components/LanguageProvider';
import Link from 'next/link';
import { ImmersiveContent } from '@/components/ImmersiveUniverse';

export default function ImmersivePage() {
  return (
    <LanguageProvider>
      <ImmersiveContent />
    </LanguageProvider>
  );
}
