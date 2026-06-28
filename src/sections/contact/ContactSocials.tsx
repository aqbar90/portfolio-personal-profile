import { socialLinks } from './socialLinks';

export function ContactSocials() {
  return (
    <div className='flex items-center gap-3 lg:gap-4'>
      {socialLinks.map(({ id, icon: Icon, href, label }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          className='flex size-10 items-center justify-center rounded-full bg-brand-primary transition-colors duration-300 hover:bg-brand-primary-dark active:scale-95'
        >
          <Icon className='size-5 text-white' />
        </a>
      ))}
    </div>
  );
}
