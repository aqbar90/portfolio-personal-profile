import { ContactProfile } from './ContactProfile';
import { ContactSocials } from './ContactSocials';
import { ContactTagline } from './ContactTagline';

export function ContactInfo() {
  return (
    <section className='flex flex-col gap-4 lg:h-full lg:justify-between lg:py-7.5'>
      <ContactProfile />
      <div className='flex flex-col gap-8'>
        <ContactTagline />

        <ContactSocials />
      </div>
    </section>
  );
}
