import avatar from '@/assets/superiority/profile-avatar.svg';
import placeholder from '@/assets/superiority/profile-default.svg';
import starIcon from '@/assets/superiority/star-badge.svg';

import { Button } from '@/components/ui/button';

import { ComparisonCard } from './ComparisonCard';
import { SuperiorityHeader } from './SuperiorityHeader';
import { strengths, weaknesses } from './superiority-data';

export function SuperioritySection() {
  return (
    <section id='superiority' className='px-4 py-10 lg:py-20 lg:px-30'>
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
          <Button className='text-md leading-md tracking-tight font-bold text-white py-7 w-full bg-brand-primary rounded-full lg:w-80'>
            Hire Me
          </Button>
        </div>
      </div>
    </section>
  );
}
