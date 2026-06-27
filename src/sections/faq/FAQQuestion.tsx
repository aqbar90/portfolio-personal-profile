import { FAQToggle } from './FAQToggle';

interface FAQQuestionProps {
  question: string;
}

export function FAQQuestion({ question }: FAQQuestionProps) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <h3 className='flex-1 text-md leading-md lg:text-display-xs lg:leading-display-xs tracking-tight font-bold text-neutral-900'>
        {question}
      </h3>

      <FAQToggle />
    </div>
  );
}
