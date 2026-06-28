import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { PortfolioCard } from './PortfolioCard';
import { portfolios } from './portfolio-data';

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPortfolio = portfolios[currentIndex];

  const nextPortfolio = portfolios[(currentIndex + 1) % portfolios.length];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolios.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolios.length - 1 : prev - 1));
  };

  return (
    <div className='flex flex-col gap-6 lg:gap-8 '>
      <div className='flex flex-row gap-3 lg:gap-5'>
        <PortfolioCard
          title={currentPortfolio.title}
          image={currentPortfolio.image}
        />
        <div className='hidden lg:block lg:w-full'>
          <PortfolioCard
            title={nextPortfolio.title}
            image={nextPortfolio.image}
          />
        </div>
      </div>

      <div className='flex justify-center gap-3 lg:gap-4'>
        <button
          type='button'
          onClick={handlePrevious}
          className='flex size-10 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-400 hover:cursor-pointer active:scale-95'
        >
          <ChevronLeft className='size-6' />
        </button>

        <button
          type='button'
          onClick={handleNext}
          className='flex size-10 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-400 hover:cursor-pointer active:scale-95'
        >
          <ChevronRight className='size-6' />
        </button>
      </div>
    </div>
  );
}
