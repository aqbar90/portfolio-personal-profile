import developerWave from '@/assets/about/developer-wave.svg';

export function DeveloperImageCard() {
  return (
    <div className='flex justify-center pt-3.5 overflow-hidden rounded-4xl bg-[#F0DAC1]'>
      <img
        src={developerWave}
        alt='Developer waving'
        className='h-62.25 w-62.25 object-contain'
      />
    </div>
  );
}
