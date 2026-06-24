import { cn } from '@/lib/utils';

interface ComparisonItemProps {
  icon: string;
  text: string;
  divider?: boolean;
  variant?: 'primary' | 'secondary';
}

export function ComparisonItem({
  icon,
  text,
  divider = true,
  variant,
}: ComparisonItemProps) {
  return (
    <>
      <div className='flex items-center gap-3 py-4'>
        <img
          src={icon}
          alt=''
          className={cn('size-8', variant === 'secondary' && 'opacity-40')}
        />

        <span
          className={cn(
            'text-md leading-md lg:text-lg lg:leading-lg tracking-tight text-neutral-950',
            variant === 'primary' ? 'font-bold' : 'font-normal'
          )}
        >
          {text}
        </span>
      </div>

      {divider && (
        <div
          className={cn(
            'h-px w-full',
            variant === 'primary' ? 'bg-white/50' : 'bg-neutral-300'
          )}
        />
      )}
    </>
  );
}
