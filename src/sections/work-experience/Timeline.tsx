import { experiences } from './experience-data';
import { TimelineItem } from './TimelineItem';

export function Timeline() {
  return (
    <div
      className='relative
    '
    >
      {/* Mobile Line */}
      <div className='absolute bottom-0 left-3 top-6 w-px z-10 -translate-x-1/2 bg-neutral-300 lg:hidden' />

      {/* Desktop Line */}
      <div className='absolute top-6 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-neutral-300 lg:block' />

      <div className='relative z-20 flex flex-col gap-4 lg:hidden lg:gap-8'>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <div className='hidden lg:flex lg:flex-col lg:gap-8'>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
