import { motion } from 'framer-motion';
import { Award, Shield, Heart, Users } from 'lucide-react';
import { asset } from '@/lib/asset';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const values = [
    {
      icon: Award,
      title: 'Medical Excellence',
      description:
        'Every procedure is performed by PRC-licensed aesthetic doctors with years of specialized training.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description:
        'We use only medical-grade equipment and maintain strict sterile protocols for your protection.',
    },
    {
      icon: Heart,
      title: 'Natural Results',
      description:
        'Our philosophy is enhancement, not transformation. We preserve what makes you uniquely beautiful.',
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description:
        'No cookie-cutter treatments. Each plan is designed specifically for your skin, goals, and lifestyle.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-28 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            About <span className="italic text-primary">Asiaderm</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where clinical precision meets genuine Filipino hospitality. We're not a glamorous spa, and we're not a cold hospital — we're something better: a medical aesthetics clinic where your safety, comfort, and results come first.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div {...fadeIn} className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Doctor-Led <span className="italic text-primary">Aesthetics</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Asiaderm Aesthetics was founded on a simple principle: medical aesthetics should be just that — <em className="text-foreground">medical</em>. Every injection, every laser treatment, every procedure is performed by licensed aesthetic doctors who've dedicated their careers to the science and art of safe, effective cosmetic enhancement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency, informed consent, and realistic expectations. During your consultation, we'll discuss what's possible, what's not, and what you can genuinely expect from your treatment. No overselling. No unrealistic promises. Just honest medical advice from doctors who care about your wellbeing as much as your results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Marikina City, we've built a reputation as the clinic where safety and artistry meet — where patients feel heard, respected, and confident that they're in expert hands.
              </p>
            </div>

            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={asset('assets/face.png')}
                alt="Asiaderm clinical care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeIn} className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="italic text-primary">Commitment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 border-l-2 border-primary"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div {...fadeIn}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Visit Us in <span className="italic text-primary">Marikina</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lot 9 Blk 4, Golden Valley Subdivision Commercial Center
                  <br />
                  JP Rizal, Marikina City
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Landmark</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beside South Supermarket, JP Rizal, Lamuan
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-serif text-xl font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <a
                    href="tel:09453674505"
                    className="hover:text-primary transition-colors"
                  >
                    0945 367 4505
                  </a>
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps?q=Lot+9+Blk+4+Golden+Valley+Subdivision+Commercial+Center+JP+Rizal+Marikina+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="button-get-directions"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="aspect-video bg-muted overflow-hidden">
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
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeIn} className="text-center mt-20 pt-12 border-t gold-border-t">
          <p className="text-lg mb-6">
            Ready to experience doctor-led aesthetics? Book your consultation today.
          </p>
          <a
            href="https://www.facebook.com/asiaderm.aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            data-testid="button-book-about"
          >
            Book via Messenger
          </a>
        </motion.div>
      </div>
    </div>
  );
}
