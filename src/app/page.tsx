import { Hero3D } from '@/components/Hero3D';
import { CVTimeline } from '@/components/CVTimeline';
import { About } from '@/components/About';
import { LicensesCertifications } from '@/components/LicensesCertifications';
import { Expertise } from '@/components/Expertise';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { TechStack } from '@/components/TechStack';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { ApplyCTA } from '@/components/ApplyCTA';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { ModeProvider } from '@/components/ModeProvider';
import { ChatWidget } from '@/components/ChatWidget';
import { EngineeringStats } from '@/components/EngineeringStats';
import { ModeToggle } from '@/components/ModeToggle';

export default function Home() {
  return (
    <ModeProvider>
      <LanguageProvider>
        <main className="flex-grow">
          <Hero3D />
          <ModeToggle />
          <EngineeringStats />
          <CVTimeline />
          <About />
          <LicensesCertifications />
          <Expertise />
          <FeaturedProjects />
          <TechStack />
          <Services />
          <Experience />
          <Contact />
          <ApplyCTA />
          <ChatWidget />
        </main>
        <Footer />
      </LanguageProvider>
    </ModeProvider>
  );
}
