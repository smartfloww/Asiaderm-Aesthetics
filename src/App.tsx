import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect } from 'react';
import { DesktopNav } from '@/components/layout/desktop-nav';
import { MobileTopNav } from '@/components/layout/mobile-top-nav';
import { Footer } from '@/components/layout/footer';
import Home from '@/pages/home';
import Services from '@/pages/services';
import Gallery from '@/pages/gallery';
import About from '@/pages/about';
import Contact from '@/pages/contact';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function getRouterBase() {
  if (typeof window === 'undefined') {
    return import.meta.env.BASE_URL.replace(/\/$/, '');
  }

  return new URL(import.meta.env.BASE_URL, window.location.href).pathname.replace(/\/$/, '');
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location]);

  return (
    <>
      <DesktopNav />
      <MobileTopNav />
      <main className="min-h-screen pt-14 md:pt-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={getRouterBase()}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
