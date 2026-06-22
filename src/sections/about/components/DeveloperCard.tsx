import avatar from '@/assets/profile/avatar.svg';
import dotsPattern from '@/assets/about/pattern-dots.svg';
import { SocialLinks } from './SocialLinks';

export function DeveloperCard() {
  return (
    <div className='relative overflow-hidden rounded-4xl bg-linear-to-r from-[#134BA6] to-[#2D8CFF] px-4 py-6'>
      <img
        src={dotsPattern}
        alt=''
        aria-hidden='true'
        className='absolute left-0 top-0 opacity-90'
      />

      <div className='relative z-10 flex flex-col gap-24'>
        {/* Profile */}

        <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-2'>
            <div className='h-12 w-12 overflow-hidden rounded-full bg-[#2D8CFF]'>
              <img
                src={avatar}
                alt='Edwin'
                className='h-full w-full object-cover'
              />
            </div>

            <div className='flex flex-col'>
              <span className='font-sans text-md font-bold leading-md tracking-tight text-neutral-25'>
                Edwin Anderson
              </span>

              <span className='text-sm font-semibold leading-sm text-neutral-25'>
                edwinanderson@email.com
              </span>
            </div>
          </div>

          {/* Social Placeholder */}

          <SocialLinks />
        </div>

        {/* Content */}

        <div className='flex flex-col gap-1.5'>
          <h3 className='text-display-md leading-display-md tracking-tight font-bold text-neutral-25'>
            Pushing boundaries
            <br />
            through innovation
          </h3>

          <p className='text-sm leading-sm font-medium text-neutral-25'>
            I create frontend solutions that not only look good but also load
            fast, work everywhere, and scale well.
          </p>
        </div>
      </div>
    </div>
  );
}
