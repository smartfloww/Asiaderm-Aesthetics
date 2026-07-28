import { motion } from 'framer-motion';
import { Award, Heart, Shield, Clock, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { asset } from '@/lib/asset';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const signatureTreatments = [
    {
      title: 'Korean Threads',
      description: 'Non-surgical face lifting with precision threadwork',
      treatments: ['Hiko Nose Lift', 'Foxy Eyes', 'Face Lift Threads'],
      image: asset('assets/face.png'),
    },
    {
      title: 'Advanced Laser',
      description: 'PICO and CO2 fractional laser for skin renewal',
      treatments: ['Tattoo Removal', 'Skin Resurfacing', 'Acne Scars'],
      image: asset('assets/face-acne.jpg'),
    },
    {
      title: 'Skin Boosters',
      description: 'Medical-grade rejuvenation with premium serums',
      treatments: ['Rejuran Healer', 'Profhilo', 'ASCE Exosomes'],
      image: asset('assets/face-cleaning-before-after.png'),
    },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: 'PRC-Licensed Doctors',
      description: 'Every procedure performed by board-certified aesthetic physicians',
    },
    {
      icon: Shield,
      title: 'Clinical Safety',
      description: 'Medical-grade equipment and sterile protocols',
    },
    {
      icon: Heart,
      title: 'Natural Results',
      description: 'Subtle enhancements that preserve your unique features',
    },
    {
      icon: Clock,
      title: 'Personalized Care',
      description: 'Thorough consultations tailored to your goals',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src={asset('assets/face.png')}
              alt="Clinical aesthetics"
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="w-16 h-px bg-primary mb-6" />
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Look & Feel Your{' '}
              <span className="italic text-primary">Best</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Doctor-led medical aesthetics in Marikina City. Every visit is a step toward confidence — delivered with precision, safety, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.facebook.com/asiaderm.aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-hero-book"
              >
                <Phone className="w-5 h-5" />
                Book Your Consultation
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-hero-services"
              >
                View All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={asset('assets/face.png')}
              alt="Professional aesthetic care"
              className="w-full h-auto shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              White Coat <span className="italic text-primary">Confidence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Medical expertise meets Filipino hospitality. The feeling of a clinic where safety and results matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 border-l-2 border-primary"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Signature <span className="italic text-primary">Treatments</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced procedures tailored to your unique aesthetic goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {signatureTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t gold-border-t">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{treatment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
                  <ul className="space-y-2">
                    {treatment.treatments.map((item) => (
                      <li key={item} className="text-sm flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="link-view-all-services"
            >
              View Complete Service Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Results Gallery Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Real <span className="italic text-primary">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Documented transformations from our licensed aesthetic doctors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-square overflow-hidden bg-card"
            >
              <img
                src={asset('assets/face-acne-1-before.png')}
                alt="Acne treatment results"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-square overflow-hidden bg-card"
            >
              <img
                src={asset('assets/face-cleaning-before-after.png')}
                alt="Skin rejuvenation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-square overflow-hidden bg-card"
            >
              <img
                src={asset('assets/tatto_before.png')}
                alt="Tattoo removal"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="link-view-gallery"
            >
              View Before & After Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="italic text-primary">Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Book a personalized consultation with our licensed aesthetic doctors. Let's discuss your goals and create a treatment plan designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/asiaderm.aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-cta-book"
              >
                <Phone className="w-5 h-5" />
                Book via Messenger
              </a>
              <a
                href="tel:09453674505"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="button-cta-call"
              >
                Call 0945 367 4505
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Visit Us in <span className="italic text-primary">Marikina</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    <strong className="text-foreground">Address:</strong> Lot 9 Blk 4, Golden Valley Subdivision Commercial Center, JP Rizal, Marikina City
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    <strong className="text-foreground">Landmark:</strong> Beside South Supermarket, JP Rizal, Lamuan
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary mt-1">●</span>
                  <span>
                    <strong className="text-foreground">Hours:</strong> Monday–Saturday, 9:00 AM – 7:00 PM
                  </span>
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-8 px-8 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-location-details"
              >
                Get Directions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video bg-muted overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps?q=Lot+9+Blk+4+Golden+Valley+Subdivision+Commercial+Center+JP+Rizal+Marikina+City&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Asiaderm Aesthetics Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
