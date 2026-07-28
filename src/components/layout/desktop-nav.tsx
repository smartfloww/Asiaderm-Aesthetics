import { Link, useLocation } from 'wouter';
import { useEffect, useState } from 'react';
import { asset } from '@/lib/asset';

export function DesktopNav() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-home-logo">
          <img
            src={asset('assets/logo_2.png')}
            alt="Asiaderm Aesthetics"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                location === link.href ? 'text-primary' : 'text-foreground'
              }`}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <a
          href="https://www.facebook.com/asiaderm.aesthetics"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          data-testid="button-book-messenger"
        >
          Book via Messenger
        </a>
      </div>
    </nav>
  );
}
