import { CalendarDays } from 'lucide-react';

import type { Experience } from './types';

interface ExperienceContentCardProps {
  experience: Experience;
}

export function ExperienceContentCard({
  experience,
}: ExperienceContentCardProps) {
  return (
    <article className='relative z-30 flex flex-col gap-3 p-4 rounded-b-3xl border border-neutral-200 bg-neutral-25 shadow-lg lg:rounded-3xl lg:h-71.25 lg:gap-2 lg:p-5'>
      <div className='flex items-center gap-2 '>
        <CalendarDays className='size-6 text-brand-primary' />

        <span className='text-sm leading-sm lg:text-md lg:leading-md tracking-tight font-bold text-neutral-900'>
          {experience.period}
        </span>
      </div>
      <div>
        <img
          src={experience.logo}
          alt={experience.company}
          className='h-9 w-auto object-contain'
        />
      </div>

      <h3 className='text-lg leading-lg lg:text-display-xs lg:leading-display-xs tracking-tight font-bold text-neutral-900'>
        {experience.role}
      </h3>

      <p className='text-sm leading-sm lg:text-md lg:leading-md tracking-tight font-medium text-neutral-900'>
        {experience.description}
      </p>
    </article>
  );
}
