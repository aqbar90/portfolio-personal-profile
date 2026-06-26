import type { Experience } from './types';
import { TimelineDot } from './TimelineDot';
import { ExperienceImageCard } from './ExperienceImageCard';
import { ExperienceContentCard } from './ExperienceContentCard';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* Mobile */}
      <div className='relative z-20 flex items-start gap-4 lg:hidden'>
        <TimelineDot isCurrent={experience.active} />

        <div className='flex-1'>
          <ExperienceImageCard experience={experience} />

          <ExperienceContentCard experience={experience} />
        </div>
      </div>

      {/* Desktop */}
      <div className='hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6'>
        {isLeft ? (
          <>
            <ExperienceImageCard experience={experience} />

            <TimelineDot isCurrent={experience.active} />

            <ExperienceContentCard experience={experience} />
          </>
        ) : (
          <>
            <ExperienceContentCard experience={experience} />
            <TimelineDot isCurrent={experience.active} />
            <ExperienceImageCard experience={experience} />
          </>
        )}
      </div>
    </>
  );
}
