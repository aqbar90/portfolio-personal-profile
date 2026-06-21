import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-360',
        'px-4 md:px-8 xl:px-32',
        className
      )}
    >
      {children}
    </div>
  );
}
