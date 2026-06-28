import { Button } from '@/components/ui/button';

export function ContactSubmitButton() {
  return (
    <Button className='h-11 lg:h-12 w-full rounded-full bg-brand-primary text-sm leading-sm lg:text-md lg:leading-md font-bold tracking-tight text-neutral-25 hover:bg-brand-primary-dark active:scale-95'>
      Send Message
    </Button>
  );
}
