export function FAQHeader() {
  return (
    <header className='flex flex-col items-center gap-3'>
      <div className='rounded-full border border-neutral-300 px-3'>
        <span className='text-sm leading-sm tracking-tight font-bold text-neutral-900'>
          FAQ
        </span>
      </div>

      <h2 className='text-display-sm leading-display-sm lg:text-display-xl lg:leading-display-xl text-center tracking-tight font-extrabold text-neutral-900'>
        Need More Info? Start Here
      </h2>
    </header>
  );
}
