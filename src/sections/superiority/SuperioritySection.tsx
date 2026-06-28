import avatar from '@/assets/superiority/profile-avatar.svg';
import placeholder from '@/assets/superiority/profile-default.svg';
import starIcon from '@/assets/superiority/star-badge.svg';

import { Button } from '@/components/ui/button';

import { ComparisonCard } from './ComparisonCard';
import { SuperiorityHeader } from './SuperiorityHeader';
import { strengths, weaknesses } from './superiority-data';
import { hireMeLink } from '@/constants/navigation';
import { Container } from '@/components/shared/Container';

export function SuperioritySection() {
  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id='superiority' className=' py-10 lg:py-20'>
      <Container>
        <div className='flex max-w-screen flex-col gap-6 lg:gap-12'>
          <SuperiorityHeader />
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-6'>
            <ComparisonCard
              title='Working with me'
              avatar={avatar}
              items={strengths}
              icon={starIcon}
              variant='primary'
            />

            <ComparisonCard
              title='Another Developer'
              avatar={placeholder}
              items={weaknesses}
              icon={starIcon}
              variant='secondary'
            />
          </div>
          <div className='flex justify-center'>
            <Button
              type='button'
              onClick={() => handleNavigation(hireMeLink)}
              className='text-md leading-md tracking-tight font-bold text-white py-7 w-full bg-brand-primary rounded-full lg:w-80 hover:bg-brand-primary-dark hover:cursor-pointer active:scale-95'
            >
              Hire Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
