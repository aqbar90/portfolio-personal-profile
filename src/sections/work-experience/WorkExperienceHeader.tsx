export function WorkExperienceHeader() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border border-neutral-300 px-3'>
        <span className='text-sm leading-sm font-bold tracking-tight text-neutral-900'>
          Work Experience
        </span>
      </div>

      <h2 className='text-center text-display-sm leading-display-xs lg:text-display-xl lg:leading-display-xl lg:h-28 lg:w-179.5 tracking-tight font-extrabold text-neutral-900'>
        A timeline of companies and roles that helped shape my skills.
      </h2>
    </div>
  );
}
