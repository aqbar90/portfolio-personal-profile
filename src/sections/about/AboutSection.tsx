import { Container } from '@/components/shared/Container';

import { AboutHeader } from './AboutHeader';
import { DeveloperCard } from './components/DeveloperCard';
import { DeveloperImageCard } from './components/DeveloperImageCard';
import { PortfolioCard } from './components/PortfolioCard';
import { TechnologiesCard } from './components/TechnologiesCard';
import { ContactCard } from './components/ContactCard';

export function AboutSection() {
  return (
    <section id='about' className='bg-neutral-25 py-10 md:py-20'>
      <Container>
        <div className='flex flex-col gap-5'>
          <AboutHeader />

          <DeveloperCard />

          <DeveloperImageCard />

          <PortfolioCard />

          <TechnologiesCard />

          <ContactCard />
        </div>
      </Container>
    </section>
  );
}
