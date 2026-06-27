import type { Testimony } from './types';

interface AvatarProps {
  testimony: Testimony;
}

export function Avatar({ testimony }: AvatarProps) {
  return (
    <img
      src={testimony.avatar}
      alt={testimony.name}
      className='absolute top-2 left-7 z-20 size-20 rounded-full object-cover'
    />
  );
}
