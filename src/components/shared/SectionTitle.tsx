import { cn } from '@/lib/utils';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col items-start gap-3', className)}>
      {eyebrow && (
        <span className='text-primary text-sm font-semibold uppercase tracking-[0.12em]'>
          {eyebrow}
        </span>
      )}

      <h2 className='text-heading-2 font-bold text-white'>{title}</h2>

      {description && (
        <p className='text-body-lg max-w-2xl text-neutral-300'>{description}</p>
      )}
    </div>
  );
}
