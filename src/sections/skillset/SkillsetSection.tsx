import gridPattern from '@/assets/skillset/grid-pattern.svg';

import { SkillGrid } from './SkillGrid';
import { SkillsetHeader } from './SkillsetHeader';

export function SkillsetSection() {
  return (
    <section
      id='skill'
      className='relative overflow-hidden bg-brand-primary px-4 py-13 lg:px-32 lg:py-20'
    >
      <div className='mx-auto flex max-w-screen flex-col gap-6 lg:gap-12'>
        <SkillsetHeader />

        <SkillGrid />
      </div>

      <img
        src={gridPattern}
        alt=''
        className='absolute bottom-0 left-0 w-full'
      />
    </section>
  );
}
