import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

export function SocialLinks() {
  const iconClassName = 'size-5';

  return (
    <div className='flex items-center gap-3'>
      <button
        type='button'
        aria-label='Facebook'
        className='flex size-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-25 bg-[#2982F1] transition-colors hover:bg-neutral-25 hover:text-primary'
      >
        <FaFacebookF className={iconClassName} />
      </button>

      <button
        type='button'
        aria-label='Instagram'
        className='flex size-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-25 bg-[#2982F1] transition-colors hover:bg-neutral-25 hover:text-primary'
      >
        <FaInstagram className={iconClassName} />
      </button>

      <button
        type='button'
        aria-label='LinkedIn'
        className='flex size-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-25 bg-[#2982F1] transition-colors hover:bg-neutral-25 hover:text-primary'
      >
        <FaLinkedinIn className={iconClassName} />
      </button>

      <button
        type='button'
        aria-label='TikTok'
        className='flex size-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-25 bg-[#2982F1] transition-colors hover:bg-neutral-25 hover:text-primary'
      >
        <FaTiktok className={iconClassName} />
      </button>
    </div>
  );
}
