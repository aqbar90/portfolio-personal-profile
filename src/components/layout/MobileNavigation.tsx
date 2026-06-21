import { Menu } from 'lucide-react';
import { useState } from 'react';

import avatar from '@/assets/profile/avatar.svg';
import { navigationItems, hireMeLink } from '@/constants/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type='button'
          aria-label='Open navigation menu'
          className='flex h-6 w-6 items-center justify-center text-white lg:hidden'
        >
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent
        side='right'
        showCloseButton={false}
        className='w-full max-w-none border-none bg-white p-0'
      >
        {/* Header */}
        <div className='flex h-20 items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <div className='h-10 w-10 overflow-hidden rounded-full bg-primary'>
              <img
                src={avatar}
                alt='Edwin'
                className='h-full w-full object-cover'
              />
            </div>

            <span className='font-mulish text-xl font-bold leading-xl text-[#181D27]'>
              Edwin
            </span>
          </div>

          <SheetClose asChild>
            <button
              type='button'
              aria-label='Close menu'
              className='flex h-6 w-6 items-center justify-center'
            >
              ✕
            </button>
          </SheetClose>
        </div>

        {/* Content */}
        <div className='px-4 pt-3'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type='button'
                  onClick={() => handleNavigation(item.href)}
                  className='py-2 text-left font-mulish text-base font-medium leading-md tracking-[-0.03em] text-[#0A0D12]'
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              type='button'
              onClick={() => handleNavigation(hireMeLink)}
              className='h-11 w-full rounded-full bg-[#2D8CFF] font-mulish text-base font-bold text-white hover:bg-[#2D8CFF]/90'
            >
              Hire Me
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
