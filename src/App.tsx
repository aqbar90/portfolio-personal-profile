import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/sections/hero/HeroSection';
import { AboutSection } from './sections/about/AboutSection';
import { SkillsetSection } from './sections/skillset/SkillsetSection';
import { SuperioritySection } from './sections/superiority/SuperioritySection';
import { PortfolioSection } from './sections/portfolio/PortfolioSection';
import { WorkExperienceSection } from './sections/work-experience/WorkExperienceSection';
import { TestimonySection } from './sections/testimony/TestimonySection';
import { FAQSection } from './sections/faq/FAQSection';

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

      {/* Placeholder Hero */}
      <section
        id='home'
        className='flex min-h-screen items-center justify-center pt-20'
      >
        <h1 className='text-5xl font-bold text-white'>
          Portfolio Personal Profile
        </h1>
      </section>

      {/* Temporary Sections */}
      <section id='about' className='h-screen' />
      <section id='skill' className='h-screen' />
      <section id='projects' className='h-screen' />
      <section id='faq' className='h-screen' />
      <section id='contact' className='h-screen' />
    </main>
  );
}
