import * as Accordion from '@radix-ui/react-accordion';

import { faqs } from './faq-data';
import { FAQAnswer } from './FAQAnswer';
import { FAQQuestion } from './FAQQuestion';

export function FAQAccordion() {
  return (
    <Accordion.Root
      type='single'
      collapsible
      defaultValue={faqs[0].id.toString()}
      className='flex flex-col gap-4'
    >
      {faqs.map((faq) => (
        <Accordion.Item
          key={faq.id}
          value={faq.id.toString()}
          className='rounded-3xl border border-neutral-300 bg-neutral-25'
        >
          <Accordion.Header>
            <Accordion.Trigger asChild className='group w-full'>
              <button className='w-full p-3 text-left'>
                <FAQQuestion question={faq.question} />
              </button>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content
            className='
            overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up p-3
          '
          >
            {faq.answer && <FAQAnswer answer={faq.answer} />}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
