import messageIcon from '@/assets/about/message.svg';

export function ContactCard() {
  return (
    <a
      href='#contact'
      className='flex h-12 lg:h-125.5 lg:w-11xl items-center justify-center rounded-full bg-brand-primary'
    >
      <img
        src={messageIcon}
        alt='Message'
        className='h-4 w-5.5 lg:w-10.25 lg:h-7.75'
      />
    </a>
  );
}
