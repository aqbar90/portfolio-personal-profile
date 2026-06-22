import messageIcon from '@/assets/about/message.svg';

export function ContactCard() {
  return (
    <a
      href='#contact'
      className='flex h-12 items-center justify-center rounded-full bg-brand-primary'
    >
      <img src={messageIcon} alt='Message' className='h-4 w-5.5' />
    </a>
  );
}
