interface FAQAnswerProps {
  answer: string;
}

export function FAQAnswer({ answer }: FAQAnswerProps) {
  return (
    <>
      <div className='h-px bg-neutral-300' />

      <p className='text-sm leading-sm lg:text-md lg:leading-md font-medium tracking-tight text-neutral-800'>
        {answer}
      </p>
    </>
  );
}
