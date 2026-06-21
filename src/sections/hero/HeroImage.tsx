import developer from '@/assets/hero/Developer.svg';

export function HeroImage() {
  return (
    <div className='absolute bottom-0 right-0 z-20 lg:-right-20 lg:bottom-15'>
      <img
        src={developer}
        alt='Edwin Developer'
        className='w-full max-w-103.5 lg:max-w-190'
      />
    </div>
  );
}
