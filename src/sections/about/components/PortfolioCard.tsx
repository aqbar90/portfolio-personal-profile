import portfolioPreview from '@/assets/about/portfolio-preview.jpg';

import { PortfolioCardBackground } from './PortfolioCardBackground';
import { PortfolioCardHeader } from './PortfolioCardHeader';

export function PortfolioCard() {
  return (
    <div className='relative h-111 lg:h-125.5 lg:w-125.5 overflow-hidden rounded-3xl bg-neutral-950'>
      <PortfolioCardBackground />

      <div className='relative z-10 p-6'>
        <PortfolioCardHeader />

        <div className='mt-5 flex justify-center px-4'>
          <img
            src={portfolioPreview}
            alt='Portfolio Preview'
            className='absolute h-76 lg:h-109.5 lg:w-109.5 -bottom-71 lg:-bottom-104 rounded-lg object-cover'
          />
        </div>
      </div>
    </div>
  );
}
