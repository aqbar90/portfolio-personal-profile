import { useFormContext } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import type { ContactFormValues } from './contactSchema';

interface ContactTextareaProps {
  label: string;
  name: keyof ContactFormValues;
  placeholder: string;
}

export function ContactTextarea({
  label,
  name,
  placeholder,
}: ContactTextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm leading-sm font-bold tracking-tight text-neutral-25'>
        {label}
        <span className='text-[#EE1D52]'>*</span>
      </label>

      <Textarea
        rows={4}
        placeholder={placeholder}
        {...register(name)}
        className='resize-none rounded-none border-x-0 border-t-0 border-b border-neutral-900 bg-transparent px-3 py-4  text-neutral-25 placeholder:text-neutral-500 text-sm leading-sm lg:text-md lg:leading-md font-normal focus-visible:ring-0 focus-visible:border-brand-primary'
      />

      {errors[name] && (
        <p className='text-xs leading-xs lg:text-sm lg:leading-sm text-[#EE1D52]'>
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
