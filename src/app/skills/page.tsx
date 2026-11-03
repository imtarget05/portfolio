import { SkillsShowcase } from '@/components/SkillsShowcase';
import { LanguageProvider } from '@/components/LanguageProvider';

export default function SkillsPage() {
  return (
    <LanguageProvider>
      <main className="flex-grow">
        <SkillsShowcase />
      </main>
    </LanguageProvider>
  );
}
