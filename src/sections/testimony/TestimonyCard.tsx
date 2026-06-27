import { Avatar } from './Avatar';
import { Rating } from './Rating';
import type { Testimony } from './types';

interface TestimonyCardProps {
  testimony: Testimony;
}

export function TestimonyCard({ testimony }: TestimonyCardProps) {
  return (
    <article className='relative flex h-full flex-col pt-10'>
      <Avatar testimony={testimony} />

      <div className='flex min-h-72 flex-1 flex-col gap-6 lg:gap-17 rounded-2xl bg-neutral-25 px-4  pt-15 lg:px-5 shadow-lg'>
        <div className='flex flex-col gap-4 lg:gap-5'>
          <Rating rating={testimony.rating} />

          <p className='text-md leading-md lg:text-lg lg:leading-lg lg:tracking-tight font-semibold min-h-22.5 lg:min-h-32 text-neutral-900'>
            "{testimony.testimonial}"
          </p>
        </div>

        <footer className='mt-auto flex flex-col'>
          <h3 className='text-sm leading-sm lg:text-md lg:leading-md font-bold tracking-tight text-neutral-900'>
            — {testimony.name}
          </h3>

          <p className='text-sm leading-sm lg:text-md lg:leading-md lg:tracking-tight font-medium text-neutral-900'>
            {testimony.position} at {testimony.company}
          </p>
        </footer>
      </div>
    </article>
  );
}
