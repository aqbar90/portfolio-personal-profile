import { ContactInput } from './ContactInput';
import { ContactSubmitButton } from './ContactSubmitButton';
import { ContactTextarea } from './ContactTextarea';

export function ContactFields() {
  return (
    <div className='flex flex-col gap-4 lg:gap-6'>
      <ContactInput
        label='Name'
        name='name'
        placeholder='What should I call you? ...'
      />

      <ContactInput
        label='Email'
        name='email'
        type='email'
        placeholder='Where can I reach you? ...'
      />

      <ContactTextarea
        label='Message'
        name='message'
        placeholder='Tell me about your project or just say hi :) ...'
      />

      <ContactSubmitButton />
    </div>
  );
}
