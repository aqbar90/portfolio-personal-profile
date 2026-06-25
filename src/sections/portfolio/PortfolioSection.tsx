import { PortfolioCarousel } from './PortfolioCarousel';
import { PortfolioHeader } from './PortfolioHeader';

export function PortfolioSection() {
  return (
    <section id='projects' className='px-2.5 py-10 lg:px-32 lg:py-20'>
      <div className='flex flex-col gap-6 lg:gap-12'>
        <PortfolioHeader />
        <PortfolioCarousel />
      </div>
    </section>
  );
}
