import { FAQContainer } from './FAQContainer';
import backgroundPattern from '@/assets/faq/background-pattern.svg';
import bottomEllipse from '@/assets/faq/bottom-ellipse.svg';
import bgPattern1 from '@/assets/faq/bg-pattern-1.svg';
import bgPattern2 from '@/assets/faq/bg-pattern-2.svg';
import bgPattern3 from '@/assets/faq/bg-pattern-3.svg';
import { Container } from '@/components/shared/Container';

export function FAQSection() {
  return (
    <section
      id='faq'
      className='bg-[#0D0A2C] pt-10 pb-30 lg:pt-25 lg:pb-73.5 mx-auto max-w-screen relative overflow-hidden'
    >
      <Container>
        <img
          src={backgroundPattern}
          alt=''
          aria-hidden
          className='absolute inset-0 z-10 h-full w-full object-cover lg:hidden'
        />

        {/* Background Pattern 1 */}
        <img
          src={bgPattern1}
          alt=''
          aria-hidden
          className=' pointer-events-none absolute inset-x-0 top-0 z-0 hidden w-full max-w-none lg:block'
        />

        {/* Background Pattern 2 */}
        <img
          src={bgPattern2}
          alt=''
          aria-hidden
          className='pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden w-full max-w-none lg:block'
        />

        {/* Background Pattern 3 */}
        <img
          src={bgPattern3}
          alt=''
          aria-hidden
          className='pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden w-full max-w-none lg:block'
        />

        <div className='relative z-20 mx-auto w-full rounded-4xl bg-white/30 p-3 lg:rounded-[48px] lg:p-5'>
          <FAQContainer />
        </div>

        {/* Bottom Ellipse */}
        <img
          src={bottomEllipse}
          alt=''
          aria-hidden
          className='hidden absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 lg:block'
        />
      </Container>
    </section>
  );
}
