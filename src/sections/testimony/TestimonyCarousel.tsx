import { TestimonyCard } from './TestimonyCard';
import { testimonies } from './testimony-data';

export function TestimonyCarousel() {
  const marqueeItems = [...testimonies, ...testimonies];

  return (
    <div className='group relative'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-linear-to-r from-neutral-25 to-transparent lg:w-24' />

      <div className='pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-linear-to-l from-neutral-25 to-transparent lg:w-24' />

      <div className='overflow-x-hidden overflow-y-visible'>
        <div className='marquee-wrapper'>
          <div className='marquee-track flex gap-4 lg:gap-6.5'>
            {marqueeItems.map((testimony, index) => (
              <div key={`${testimony.id}-${index}`} className='w-91 shrink-0'>
                <TestimonyCard testimony={testimony} />
              </div>
            ))}
          </div>
          <div className='marquee-track flex gap-4 lg:gap-6' aria-hidden='true'>
            {marqueeItems.map((testimony, index) => (
              <div key={`${testimony.id}-${index}`} className='w-91 shrink-0'>
                <TestimonyCard testimony={testimony} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
