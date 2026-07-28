import { MapPin, Phone, Clock, MessageCircleMore } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t gold-border-t mt-24 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/logo_2.png"
              alt="Asiaderm Aesthetics"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Doctor-led medical aesthetics and day spa in Marikina City. Licensed, safe, and trusted.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <p>
                  Lot 9 Blk 4, Golden Valley Subdivision Commercial Center, JP Rizal, Marikina City
                  <br />
                  <span className="text-xs italic">Beside South Supermarket, Lamuan</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:09453674505" className="hover:text-primary transition-colors">
                  0945 367 4505
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <p>Monday–Saturday<br />9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Connect</h3>
            <a
              href="https://www.facebook.com/asiaderm.aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-facebook"
            >
              <MessageCircleMore className="w-4 h-4" />
              Follow us on Facebook
            </a>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/asiaderm.aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-book-footer"
              >
                Book via Messenger
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Asiaderm Aesthetics. All rights reserved.</p>
          <p className="mt-2 italic">
            All non-surgical procedures performed exclusively by Licensed Aesthetic Doctors holding valid PRC licenses.
          </p>
        </div>
      </div>
    </footer>
  );
}
