import { Container } from '@/components/shared/Container';

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export function HeroSection() {
  return (
    <section id='home' className='relative overflow-hidden'>
      <HeroBackground />

      <Container>
        <div className='relative z-10 flex min-h-199.5 flex-col pt-36.5 lg:min-h-272.25 lg:grid lg:grid-cols-2 lg:items-center lg:pt-1'>
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
      <div
        className='absolute left-1/2 -bottom-11xl h-42.75 w-180 z-30 -translate-x-1/2 rounded-[100%] bg-white lg:-bottom-108 lg:h-134.5 lg:w-[2262px]
  '
      />
    </section>
  );
}
