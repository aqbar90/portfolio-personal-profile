import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/sections/hero/HeroSection';
import { AboutSection } from './sections/about/AboutSection';
import { SkillsetSection } from './sections/skillset/SkillsetSection';
import { SuperioritySection } from './sections/superiority/SuperioritySection';
import { PortfolioSection } from './sections/portfolio/PortfolioSection';
import { WorkExperienceSection } from './sections/work-experience/WorkExperienceSection';
import { TestimonySection } from './sections/testimony/TestimonySection';
import { FAQSection } from './sections/faq/FAQSection';
import { FooterSection } from './sections/footer/FooterSection';
import { ContactSection } from './sections/contact/ContactSection';

export default function App() {
  return (
    <main className='min-h-screen bg-white'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsetSection />
      <SuperioritySection />
      <PortfolioSection />
      <WorkExperienceSection />
      <TestimonySection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
