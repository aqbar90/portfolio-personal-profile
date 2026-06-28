import { useEffect, useState } from 'react';

import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { Logo } from '@/components/layout/Logo';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { navigationItems, hireMeLink } from '@/constants/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300',
        isScrolled && 'bg-black/40 backdrop-blur-xl border-b border-white/10'
      )}
    >
      <Container className='h-full'>
        <div className='flex h-full items-center justify-between'>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className='hidden lg:block'>
            <ul className='flex items-center gap-5'>
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    type='button'
                    onClick={() => handleNavigation(item.href)}
                    className='font-sans text-base font-medium tracking-[-0.03em] text-white transition-opacity hover:opacity-80'
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className='hidden lg:block'>
            <Button
              type='button'
              onClick={() => handleNavigation(hireMeLink)}
              className='h-11 w-60 rounded-full bg-white font-mulish text-base font-bold text-[#0A0D12] hover:bg-white/80 hover:cursor-pointer active:scale-95'
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className='lg:hidden'>
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
