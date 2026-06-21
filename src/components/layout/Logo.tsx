import avatar from '@/assets/profile/avatar.svg';

interface LogoProps {
  textColor?: string;
}

export function Logo({ textColor = 'text-white' }: LogoProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className='h-10 w-10 overflow-hidden rounded-full bg-primary'>
        <img src={avatar} alt='Edwin' className='h-full w-full object-cover' />
      </div>

      <span
        className={`
          font-mulish
          text-xl
          font-bold
          leading-7
          ${textColor}
        `}
      >
        Edwin
      </span>
    </div>
  );
}
