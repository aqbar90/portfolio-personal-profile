export function PortfolioHeader() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border border-neutral-300 px-3'>
        <span className='text-sm leading-sm font-bold tracking-tight text-neutral-900'>
          Portfolio
        </span>
      </div>

      <h2 className='text-center text-display-sm leading-display-sm lg:text-display-xl lg:leading-display-xl tracking-tight font-extrabold text-neutral-900'>
        Built with Passion, Shipped with Precision
      </h2>
    </div>
  );
}
