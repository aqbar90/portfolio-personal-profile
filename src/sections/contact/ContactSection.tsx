import { Container } from '@/components/shared/Container';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactSection() {
  return (
    <section id='contact' className='bg-neutral-950'>
      <div className=' py-10 lg:pb-30'>
        <Container>
          <div className='mx-auto flex w-full flex-col gap-6 lg:grid lg:grid-cols-[420px_1px_1fr] lg:gap-27.5'>
            <ContactInfo />

            <div className='h-px bg-neutral-900' />

            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}
