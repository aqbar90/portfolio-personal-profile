export function AboutHeader() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center justify-center rounded-full border border-[#D5D7DA] px-3 py-1'>
        <span className='font-sans text-sm font-bold leading-sm tracking-[-0.03em] text-[#181D27]'>
          About
        </span>
      </div>

      <h2 className='max-w-90.25 text-center font-sans text-display-sm font-extrabold leading-display-sm tracking-[-0.03em] text-[#181D27] md:max-w-175 md:text-5xl md:leading-tight'>
        The Developer Behind
        <br />
        the Pixel
      </h2>
    </div>
  );
}
