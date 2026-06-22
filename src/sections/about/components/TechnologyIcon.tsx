import type { ReactNode } from 'react';

interface TechnologyIconProps {
  icon: ReactNode;
  className?: string;
}

export function TechnologyIcon({ icon, className = '' }: TechnologyIconProps) {
  return (
    <div
      className={`absolute flex h-15.25 w-15.25 lg:h-21.25 lg:w-21.25 items-center justify-center rounded-full bg-neutral-25/60 backdrop-blur-xl ${className}`}
    >
      {icon}
    </div>
  );
}
