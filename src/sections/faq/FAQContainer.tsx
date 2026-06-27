import { FAQHeader } from './FAQHeader';
import { FAQList } from './FAQList';

export function FAQContainer() {
  return (
    <div className='rounded-4xl bg-neutral-25 px-4 py-6 lg:rounded-[32px] lg:p-10'>
      <div className='flex flex-col gap-6 lg:gap-8'>
        <FAQHeader />

        <FAQList />
      </div>
    </div>
  );
}
