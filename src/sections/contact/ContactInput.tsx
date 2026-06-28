import { useFormContext } from 'react-hook-form';

import { Input } from '@/components/ui/input';

import type { ContactFormValues } from './contactSchema';

interface ContactInputProps {
  label: string;
  name: keyof ContactFormValues;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

export function ContactInput({
  label,
  name,
  placeholder,
  type = 'text',
}: ContactInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<ContactFormValues>();

  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm leading-sm lg:text-md lg:leading-md font-bold tracking-tight text-neutral-25'>
        {label}
        <span className='text-[#EE1D52]'>*</span>
      </label>

      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className='border-x-0 border-t-0 rounded-none bg-transparent items-center text-neutral-900 px-3 py-4 min-h-15 placeholder:text-neutral-500 focus-visible:ring-0 text-sm leading-sm font-normal lg:text-md lg:leading-md lg:min-h-15.5'
      />

      {errors[name] && (
        <p className='text-xs leading-xs lg:text-sm lg:leading-sm text-[#EE1D52]'>
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
