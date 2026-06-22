import portfolioPreview from '@/assets/about/portfolio-preview.jpg';

import { PortfolioCardBackground } from './PortfolioCardBackground';
import { PortfolioCardHeader } from './PortfolioCardHeader';

export function PortfolioCard() {
  return (
    <div className='relative h-111 overflow-hidden rounded-3xl bg-neutral-950'>
      <PortfolioCardBackground />

      <div className='relative z-10 p-6'>
        <PortfolioCardHeader />

        <div className='mt-5 flex justify-center px-4'>
          <img
            src={portfolioPreview}
            alt='Portfolio Preview'
            className='absolute h-76 -bottom-71 rounded-lg object-cover'
          />
        </div>
      </div>
    </div>
  );
}
