import { TechnologiesCircles } from '@/sections/about/components/TechnologiesCircles';
import { TechnologiesTitle } from './TechnologiesTitle';
import { TechnologiesOrbit } from './TechnologiesOrbit';

export function TechnologiesCard() {
  return (
    <article className='relative h-88 lg:h-125.5 lg:w-125.5 overflow-hidden rounded-3xl bg-linear-to-b from-[#F3B64C] to-[#ED6B00]'>
      <TechnologiesCircles />

      <div className='absolute inset-0'>
        <TechnologiesOrbit />
      </div>

      <TechnologiesTitle />
    </article>
  );
}
