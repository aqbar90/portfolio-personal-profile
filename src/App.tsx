import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/sections/hero/HeroSection';
import { AboutSection } from './sections/about/AboutSection';
import { SkillsetSection } from './sections/skillset/SkillsetSection';

export default function App() {
  return (
    <main className='min-h-screen bg-[#0A0D12]'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsetSection />

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
