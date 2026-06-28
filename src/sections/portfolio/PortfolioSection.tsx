import { Container } from '@/components/shared/Container';
import { PortfolioCarousel } from './PortfolioCarousel';
import { PortfolioHeader } from './PortfolioHeader';

export function PortfolioSection() {
  return (
    <section id='portfolio' className='py-10 lg:py-20'>
      <Container>
        <div className='flex flex-col gap-6 lg:gap-12'>
          <PortfolioHeader />
          <PortfolioCarousel />
        </div>
      </Container>
    </section>
  );
}
