import { Container } from '@/components/shared/Container';
import { TestimonyCarousel } from './TestimonyCarousel';
import { TestimonyHeader } from './TestimonyHeader';

export function TestimonySection() {
  return (
    <section id='testimony' className=' py-10'>
      <Container>
        <div className=' mx-auto flex w-full flex-col gap-6 lg:py-20'>
          <TestimonyHeader />

          <TestimonyCarousel />
        </div>
      </Container>
    </section>
  );
}
