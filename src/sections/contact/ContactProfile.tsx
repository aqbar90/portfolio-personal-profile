import { contactProfile } from './contactData';

export function ContactProfile() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src={contactProfile.avatar}
        alt={contactProfile.name}
        className='size-15 lg:size-20 rounded-full object-cover'
      />

      <div className='flex flex-col gap-1'>
        <h2 className='text-md leading-md lg:text-lg lg:leading-lg tracking-tight font-bold text-neutral-25'>
          {contactProfile.name}
        </h2>

        <p className='text-sm leading-sm lg:text-md lg:leading-md font-semibold text-neutral-25'>
          {contactProfile.email}
        </p>
      </div>
    </div>
  );
}
