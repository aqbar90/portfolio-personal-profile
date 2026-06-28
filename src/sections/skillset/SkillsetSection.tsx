import gridPattern from '@/assets/skillset/grid-pattern.svg';

import { SkillGrid } from './SkillGrid';
import { SkillsetHeader } from './SkillsetHeader';
import { Container } from '@/components/shared/Container';

export function SkillsetSection() {
  return (
    <section
      id='skill'
      className='z-0 relative overflow-hidden bg-brand-primary py-13 lg:py-20'
    >
      <Container>
        <div className='relative z-10 mx-auto flex max-w-screen flex-col gap-6 lg:gap-12'>
          <SkillsetHeader />

          <SkillGrid />
        </div>

        <img
          src={gridPattern}
          alt=''
          className='absolute bottom-0 left-0 w-full'
        />
      </Container>
    </section>
  );
}
