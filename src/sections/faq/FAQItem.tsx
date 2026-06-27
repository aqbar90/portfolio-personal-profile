import type { FAQ } from './types';
import { FAQAnswer } from './FAQAnswer';
import { FAQQuestion } from './FAQQuestion';

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  return (
    <article className='rounded-3xl border border-neutral-300 bg-neutral-25 p-6 transition-all duration-300'>
      <div className='flex flex-col gap-6 lg:gap-3.5'>
        <FAQQuestion question={faq.question} />

        <FAQAnswer answer={faq.answer} />
      </div>
    </article>
  );
}
