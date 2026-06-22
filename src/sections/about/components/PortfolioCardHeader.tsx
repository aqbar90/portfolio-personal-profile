import { ArrowRight } from 'lucide-react';

export function PortfolioCardHeader() {
  return (
    <div className='flex items-start justify-between'>
      <div className='max-w-48 space-y-1'>
        <h3 className='text-xl font-bold leading-xl text-neutral-25'>
          Check My Portfolio
        </h3>

        <p className='text-md font-normal leading-md text-neutral-25 tracking-tight'>
          Explore selected works and real-world projects
        </p>
      </div>

      <button
        type='button'
        className='flex h-10 w-10 items-center justify-center rounded-full border border-neutral-25/10'
      >
        <ArrowRight className='h-6 w-6 text-neutral-25' />
      </button>
    </div>
  );
}
