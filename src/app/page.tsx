import { Hero3D } from '@/components/Hero3D';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { TechStack } from '@/components/TechStack';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { CVTimeline } from '@/components/CVTimeline';
import { ApplyCTA } from '@/components/ApplyCTA';
import { ChatWidget } from '@/components/ChatWidget';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex-grow">
        <Hero3D />
        <CVTimeline />
        <About />
        <Expertise />
        <FeaturedProjects />
        <TechStack />
        <Services />
        <ApplyCTA />
        <Contact />
        <ChatWidget />
      </main>
      <Footer />
    </LanguageProvider>
  );
}