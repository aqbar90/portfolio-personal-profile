import { Timeline } from './Timeline';
import { WorkExperienceHeader } from './WorkExperienceHeader';
import mobilePattern from '@/assets/work-experience/mobile-pattern.svg';
import desktopPattern1 from '@/assets/work-experience/desktop-pattern1.svg';
import desktopPattern2 from '@/assets/work-experience/desktop-pattern2.svg';
import { Container } from '@/components/shared/Container';

export function WorkExperienceSection() {
  return (
    <section id='experience' className='relative '>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <img
          src={mobilePattern}
          alt=''
          aria-hidden
          className='absolute top-317 z-0 w-auto object-contain lg:hidden'
        />
        <img
          src={desktopPattern1}
          alt=''
          aria-hidden
          className='hidden absolute -top-px -right-px  lg:block'
        />

        <img
          src={desktopPattern2}
          alt=''
          aria-hidden
          className='hidden absolute top-218 object-contain lg:block'
        />
      </div>

      <div className='relative z-20 py-10  lg:py-20'>
        <Container>
          <div className='mx-auto flex w-full flex-col gap-6'>
            <WorkExperienceHeader />

            <Timeline />
          </div>
        </Container>
      </div>
    </section>
  );
}
