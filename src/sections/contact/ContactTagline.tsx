import { contactProfile } from './contactData';

export function ContactTagline() {
  return (
    <h2 className='text-display-md leading-display-md lg:text-display-2xl lg:leading-display-2xl tracking-tighter font-bold text-neutral-25'>
      {contactProfile.tagline}
    </h2>
  );
}
