import developerWave from '@/assets/about/developer-wave.svg';

export function DeveloperImageCard() {
  return (
    <div className='flex justify-center pt-3.5 lg:pt-10 overflow-hidden rounded-4xl bg-[#F0DAC1] lg:w-98.25 '>
      <img
        src={developerWave}
        alt='Developer waving'
        className='h-62.25 w-62.25 lg:size-100 object-contain'
      />
    </div>
  );
}
