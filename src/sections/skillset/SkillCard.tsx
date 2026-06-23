import type { Skill } from './skill-data';

interface SkillCardProp {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProp) {
  return (
    <article className='flex flex-col items-center gap-3 rounded-2xl bg-neutral-25 p-4 shadow-card lg:py-9.25'>
      <div className='relative flex h-30.25 w-43  items-center justify-center'>
        <svg
          viewBox='0 0 120 120'
          className='h-27 w-27 lg:h-10xl lg:w-10xl'
          aria-hidden='true'
        >
          <circle
            cx='60'
            cy='60'
            r='48'
            fill='none'
            stroke='#E4E4E7'
            strokeWidth='7.6'
          />

          <path
            d='M50 15 A48 48 0 0 1 108 60'
            fill='none'
            stroke='#F3B64C'
            strokeWidth='15'
            strokeLinecap='butt'
          />
        </svg>

        <span className='absolute text-2xl leading-2xl tracking-tight font-bold text-neutral-950'>
          90%
        </span>
      </div>

      <div className='flex items-center gap-1.5 lg:gap-3'>
        <img src={skill.icon} alt={skill.name} className='size-4.75' />

        <span className='text-md leading-md tracking-tight font-bold text-neutral-900'>
          {skill.name}
        </span>
      </div>
    </article>
  );
}
