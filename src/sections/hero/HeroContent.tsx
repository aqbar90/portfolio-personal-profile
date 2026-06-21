import { Button } from '@/components/ui/button';

export function HeroContent() {
  return (
    <div className='relative z-10 flex flex-col gap-6 lg:gap-17'>
      <div className='flex flex-wrap items-start gap-3 lg:gap-6'>
        <div className='relative inline-block'>
          <div className='absolute inset-0 ' />
          <h1 className='font-mulish text-display-xl font-bold leading-display-xl tracking-[-0.03em] text-white lg:text-[72px] lg:leading-[80px]'>
            <span className='relative font-mulish text-display-xl font-bold leading-display-xl tracking-[-0.03em] text-[#0A0D12]  lg:text-[72px] lg:leading-[80px] bg-[#F8B43F]'>
              Crafting
            </span>{' '}
            Interfaces, One Line at a Time
          </h1>
        </div>

        <p className='max-w-128.5 font-mulish text-base font-semibold leading-md text-white lg:text-xl lg:leading-xl'>
          Build fast, accessible, and responsive web experiences that users
          love.
        </p>
      </div>

      <Button className='h-11 w-full rounded-full bg-white font-mulish text-sm font-bold text-[#0A0D12] hover:bg-white/90 lg:w-75 lg:text-base'>
        Say Hello
      </Button>
    </div>
  );
}
