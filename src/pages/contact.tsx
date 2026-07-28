import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircleMore } from 'lucide-react';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen pt-24 pb-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Get in <span className="italic text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your consultation and take the first step toward looking and feeling your best
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            {...fadeIn}
            className="bg-card p-8 border-l-2 border-primary"
          >
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-serif text-xl font-semibold mb-3">Visit Us</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Lot 9 Blk 4, Golden Valley Subdivision Commercial Center
              <br />
              JP Rizal, Marikina City
            </p>
            <p className="text-xs italic text-muted-foreground">
              Beside South Supermarket, Lamuan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-8 border-l-2 border-primary"
          >
            <Phone className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-serif text-xl font-semibold mb-3">Call Us</h2>
            <a
              href="tel:09453674505"
              className="text-2xl font-serif font-semibold text-primary hover:text-primary/80 transition-colors"
              data-testid="link-phone"
            >
              0945 367 4505
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Speak directly with our team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-8 border-l-2 border-primary"
          >
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-serif text-xl font-semibold mb-3">Clinic Hours</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Monday – Saturday</strong>
              <br />
              9:00 AM – 7:00 PM
            </p>
            <p className="text-xs italic text-muted-foreground mt-2">Closed Sundays</p>
          </motion.div>
        </div>

        {/* Book CTA */}
        <motion.div {...fadeIn} className="text-center mb-16 py-12 bg-muted/30">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="italic text-primary">Consultation</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Message us on Facebook Messenger for the fastest response. Our team will reply within minutes during clinic hours.
          </p>
          <a
            href="https://www.facebook.com/asiaderm.aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors"
            data-testid="button-book-messenger-contact"
          >
            <MessageCircleMore className="w-6 h-6" />
            Book via Messenger
          </a>
        </motion.div>

        {/* Map */}
        <motion.div {...fadeIn}>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">
            Find Us on the <span className="italic text-primary">Map</span>
          </h2>
          <div className="aspect-video bg-muted overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=Lot+9+Blk+4+Golden+Valley+Subdivision+Commercial+Center+JP+Rizal+Marikina+City&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Asiaderm Aesthetics Location"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            Beside South Supermarket, JP Rizal, Lamuan, Marikina City
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div {...fadeIn} className="mt-16 p-6 bg-card border-l-2 border-primary">
          <h3 className="font-serif text-xl font-semibold mb-3">What to Expect</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>
                <strong className="text-foreground">Thorough Consultation:</strong> Your doctor will assess your skin, discuss your goals, and recommend a personalized treatment plan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>
                <strong className="text-foreground">Transparent Pricing:</strong> You'll receive a clear breakdown of costs with no hidden fees
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>
                <strong className="text-foreground">Medical Safety:</strong> All procedures performed by PRC-licensed aesthetic doctors in a sterile clinical environment
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">●</span>
              <span>
                <strong className="text-foreground">Post-Care Support:</strong> Comprehensive aftercare instructions and follow-up consultations
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
