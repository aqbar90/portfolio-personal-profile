import { cn } from '@/lib/utils';
import { ComparisonItem } from './ComparisonItem';

interface ComparisonCardProps {
  title: string;
  avatar: string;
  items: string[];
  icon: string;
  variant: 'primary' | 'secondary';
}

export function ComparisonCard({
  title,
  avatar,
  items,
  icon,
  variant,
}: ComparisonCardProps) {
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-4 rounded-3xl lg:w-147',
        variant === 'primary'
          ? 'bg-brand-secondary p-6'
          : 'border border-neutral-300 bg-neutral-25 p-4'
      )}
    >
      <h3 className='text-xl leading-xl tracking-tight lg:text-display-xs lg:leading-display-xs font-bold text-neutral-900'>
        {title}
      </h3>

      {variant === 'primary' ? (
        <div className='size-16 lg:size-20 overflow-hidden rounded-full bg-brand-primary'>
          <img
            src={avatar}
            alt={title}
            className='h-full w-full object-cover'
          />
        </div>
      ) : (
        <div className='flex size-16 lg:size-20 items-center justify-center rounded-full bg-neutral-200'>
          <img src={avatar} alt={title} className='size-12 lg:size-15' />
        </div>
      )}

      <div className='flex w-full flex-col'>
        {items.map((item, index) => (
          <ComparisonItem
            key={item}
            icon={icon}
            text={item}
            variant={variant}
            divider={index !== items.length - 1}
          />
        ))}
      </div>
    </article>
  );
}
