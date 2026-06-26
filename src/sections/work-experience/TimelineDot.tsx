import { cn } from '@/lib/utils';

interface TimelineDotProps {
  isCurrent?: boolean;
}

export function TimelineDot({ isCurrent = false }: TimelineDotProps) {
  return (
    <div
      className={cn(
        'relative z-20 flex size-6 shrink-0 items-center justify-center rounded-full',
        isCurrent ? 'bg-[#C2DBFF]' : 'bg-neutral-200'
      )}
    >
      <div
        className={cn(
          'size-3 rounded-full',
          isCurrent ? 'bg-brand-primary' : 'bg-neutral-400'
        )}
      />
    </div>
  );
}
