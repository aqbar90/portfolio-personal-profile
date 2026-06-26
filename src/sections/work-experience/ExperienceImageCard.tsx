import type { Experience } from './types';

interface ExperienceImageCardProps {
  experience: Experience;
}

export function ExperienceImageCard({ experience }: ExperienceImageCardProps) {
  return (
    <article className='relative z-30 overflow-hidden rounded-t-2xl border border-neutral-200 bg-neutral-25 shadow-lg lg:rounded-2xl'>
      <img
        src={experience.image}
        alt={experience.company}
        className='h-44 w-full object-cover lg:h-71.25'
      />
    </article>
  );
}
