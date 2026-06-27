import { TestimonyCarousel } from './TestimonyCarousel';
import { TestimonyHeader } from './TestimonyHeader';

export function TestimonySection() {
  return (
    <section id='testimony' className=' px-4 py-10'>
      <div className=' mx-auto flex w-full flex-col gap-6 lg:py-20 lg:px-32'>
        <TestimonyHeader />

        <TestimonyCarousel />
      </div>
    </section>
  );
}
