import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '@/components/ui/popover';
import { asset } from '@/lib/asset';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function MobileTopNav() {
  const [location] = useLocation();

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-muted/20 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src={asset('assets/logo_2.png')} alt="Asiaderm" className="h-8 w-auto object-contain" />
        </Link>

        <Popover>
          <PopoverTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50">
            <Menu className="h-5 w-5" />
          </PopoverTrigger>
          <PopoverContent align="end" sideOffset={8} className="w-56 rounded-xl border border-muted/20 bg-background p-2 shadow-lg">
            <div className="space-y-1">
              {navItems.map((item) => (
                <PopoverClose asChild>
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      location === item.href ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted/60'
                    }`}
                  >
                    {item.label}
                  </Link>
                </PopoverClose>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
