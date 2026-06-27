import { Plus } from 'lucide-react';

export function FAQToggle() {
  return (
    <div className='flex size-6 lg:size-10 items-center justify-center rounded-full border border-neutral-300'>
      <Plus className='size-4  lg:size-6 transition-transform duration-300 group-data-[state=open]:rotate-45' />
    </div>
  );
}
