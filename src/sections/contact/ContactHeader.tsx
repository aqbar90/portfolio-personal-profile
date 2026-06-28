export function ContactHeader() {
  return (
    <header className='flex flex-col gap-3 lg:gap-2'>
      <div className='w-fit rounded-full border border-neutral-900 px-3'>
        <span className='text-sm leading-sm tracking-tight font-bold text-neutral-25'>
          Contact
        </span>
      </div>

      <h2 className='text-display-sm leading-display-sm lg:text-display-xl lg:leading-display-xl tracking-tight font-bold text-neutral-25'>
        Start Your Next Project
      </h2>
    </header>
  );
}
