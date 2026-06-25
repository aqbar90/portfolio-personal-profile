import gridPattern from '@/assets/hero/grid-pattern.svg';

export function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className='absolute inset-0 bg-[#0D0A2C]' />

      {/* Blue Glow */}
      <div className='absolute left-[-70%] top-[40%] h-125 w-125 rounded-full bg-[#0025CE] blur-[120px] lg:h-212.5 lg:w-212.5 lg:left-[-10%] lg:top-[40%] lg:blur-[150px]' />

      <div className='absolute left-[-80%] top-[50%] h-100 w-100 rounded-full bg-[#00EAFF] blur-[50px] lg:h-175 lg:w-175 lg:left-[-35%] lg:top-[30%] lg:blur-[175px]' />

      {/* Purple Glow */}
      <div className='absolute right-[-80%] top-[50%] h-125 w-125 rounded-full bg-[#4D3589] blur-[50px] lg:h-225 lg:w-225 lg:right-[-45%] lg:top[50%] lg:blur-[100px]' />

      {/* Bottom White Glow */}
      <div className='absolute bottom-1 left-1/2 h-40 w-300 -translate-x-1/2 rounded-full bg-white  blur-[75px] lg:h-60 lg:w-[1861px] lg:blur-[200px]' />

      {/* Top Grid */}
      <img
        src={gridPattern}
        alt=''
        aria-hidden='true'
        className='absolute top-0 left-0 w-full opacity-150'
      />

      {/* Bottom Grid */}
      <img
        src={gridPattern}
        alt=''
        aria-hidden='true'
        className='absolute bottom-0 left-0 w-full rotate-180 opacity-150 lg:bottom-10'
      />
    </>
  );
}
