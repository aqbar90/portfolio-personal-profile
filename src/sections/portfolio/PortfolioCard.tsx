interface PortfolioCardProps {
  title: string;
  image: string;
}

export function PortfolioCard({ title, image }: PortfolioCardProps) {
  return (
    <article className='relative w-full overflow-hidden rounded-2xl '>
      <img
        src={image}
        alt={title}
        className='aspect-square w-full object-cover'
      />

      <div className='absolute inset-x-4 bottom-4 flex justify-center rounded-full bg-black/40 py-2 backdrop-blur-xl w-74.25 left-1/2 -translate-x-1/2'>
        <span className='text-md leading-md tracking-tight font-bold text-neutral-25'>
          {title}
        </span>
      </div>
    </article>
  );
}
