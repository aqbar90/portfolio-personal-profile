import { FormProvider } from 'react-hook-form';

import { ContactFields } from './ContactFields';
import { ContactHeader } from './ContactHeader';
import { type ContactFormValues } from './contactSchema';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const form = useContactForm();

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <section className='flex flex-col gap-4 lg:gap-8'>
      <ContactHeader />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ContactFields />
        </form>
      </FormProvider>
    </section>
  );
}
