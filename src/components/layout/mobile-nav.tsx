import { Link, useLocation } from 'wouter';
import { Home, Scissors, Image, Info, Phone } from 'lucide-react';

export function MobileNav() {
  const [location] = useLocation();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Scissors },
    { href: '/gallery', label: 'Gallery', icon: Image },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Book', icon: Phone, highlight: true },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t gold-border-t shadow-lg">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-full transition-all ${
                item.highlight
                  ? 'bg-primary text-primary-foreground'
                  : isActive
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
              data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
