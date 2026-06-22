import { Container } from '@/components/shared/Container';

import { AboutHeader } from './AboutHeader';
import { DeveloperCard } from './components/DeveloperCard';
import { DeveloperImageCard } from './components/DeveloperImageCard';
import { PortfolioCard } from './components/PortfolioCard';
import { TechnologiesCard } from './components/TechnologiesCard';
import { ContactCard } from './components/ContactCard';

export function AboutSection() {
  return (
    <section id='about' className=' bg-neutral-25 py-10 lg:pb-20 lg:pt-0'>
      <Container>
        <div className='flex flex-col gap-5'>
          <AboutHeader />
          <div className='flex flex-col gap-5 lg:flex-row lg:pt-12'>
            <DeveloperCard />
            <DeveloperImageCard />
          </div>

          <div className='flex flex-col gap-5 lg:flex-row'>
            <PortfolioCard />
            <TechnologiesCard />
            <ContactCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
