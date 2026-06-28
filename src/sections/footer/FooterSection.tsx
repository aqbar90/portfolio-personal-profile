import { Container } from '@/components/shared/Container';
import { FooterCopyright } from './FooterCopyright';

export function FooterSection() {
  return (
    <footer className='bg-neutral-950'>
      <Container>
        <FooterCopyright />
      </Container>
    </footer>
  );
}
