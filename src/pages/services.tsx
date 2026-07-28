import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      category: 'FACIAL',
      services: [
        { name: 'Student Facial', price: '499' },
        { name: 'Classic Facial', price: '899' },
        { name: 'Diamond Peel', price: '999' },
        { name: 'Cyclone Aqua Facial', price: '1,999' },
        { name: 'Anti-Acne Facial', price: '1,999' },
        { name: 'Korean Glow Facial', price: '1,999' },
        { name: 'CC Glow (Natural Skin Rejuvenation)', price: '1,499' },
        { name: 'BB Glow (Semi-Permanent Make-up)', price: '1,999' },
        { name: 'Synergy Luxy Facial', price: '2,500' },
        { name: 'Exosome Stem Cell Facial', price: '2,999' },
      ],
    },
    {
      category: 'LASER PROCEDURES',
      services: [
        { name: 'Black Caviar Laser', price: '4,000' },
        { name: 'PICO Laser (Per Area)', price: '6,000' },
        { name: 'Tattoo Removal', price: '2,500', note: 'Starts At' },
      ],
    },
    {
      category: 'PEELING SKIN TREATMENT',
      services: [
        { name: 'CO2 Fractional Laser', price: '6,000' },
        { name: 'Fractional ExoNeedling', price: '5,500' },
        { name: 'PRP Plasma Treatment', price: '8,000' },
      ],
    },
    {
      category: 'DIODE LASER HAIR REMOVAL',
      services: [
        { name: 'Upper Lip', price: '750' },
        { name: 'Face', price: '1,500' },
        { name: 'Underarms', price: '2,000' },
        { name: 'Arms (2)', price: '3,000' },
        { name: 'Legs (2)', price: '3,000' },
        { name: 'Whole Back', price: '3,000' },
        { name: 'Whole Bikini & Butt', price: '4,000' },
      ],
    },
    {
      category: 'WARTS REMOVAL',
      services: [
        { name: 'Electrocautery Procedure', price: '2,500' },
        { name: 'Impulse Laser Procedure', price: '6,000' },
      ],
    },
    {
      category: 'BOTOX',
      services: [
        { name: 'Korean Botox', price: '399', note: 'per unit' },
        { name: 'Jawtox', price: '12,000' },
        { name: 'Forehead Lines', price: '12,000' },
        { name: 'Frown Lines', price: '8,000' },
        { name: "Crow's Feet", price: '8,500' },
        { name: 'Alartox', price: '9,000' },
        { name: 'Sweatox', price: '12,500' },
        { name: 'Barbie Arms', price: '12,000' },
        { name: 'Barbie Legs', price: '15,000' },
        { name: 'Barbie Shoulder', price: '12,000' },
      ],
    },
    {
      category: 'SKIN BOOSTERS',
      services: [
        { name: 'Rejuran Undereye', price: '15,000' },
        { name: 'Rejuran Scar Rejuvenation', price: '15,000' },
        { name: 'Rejuran Full Face', price: '20,000' },
        { name: 'Rejuran Healer', price: '20,000' },
        { name: 'Profhilo', price: '25,000' },
        { name: 'Panda Eyes NTCF', price: '25,000' },
        { name: 'ASCE + Exosomes', price: '15,000' },
        { name: 'Mesonanomax', price: '15,000' },
        { name: 'Luhilo', price: '20,000' },
        { name: 'Selastin Exo Plus', price: '10,000' },
      ],
    },
    {
      category: 'KOREAN THREADS',
      services: [
        { name: 'Hiko Nose Lift', price: '15,000' },
        { name: 'Foxy Eyes', price: '20,000' },
        { name: 'Face Lift Threads (20 pcs)', price: '15,000' },
        { name: 'COG Face Threadlift (6 pcs)', price: '20,000' },
      ],
    },
    {
      category: 'KOREAN DERMAL HA FILLER',
      services: [
        { name: 'Cheek Filler', price: '20,000' },
        { name: 'Chin Filler', price: '15,000' },
        { name: 'Lip Filler', price: '15,000' },
        { name: 'Temple Filler', price: '20,000' },
        { name: 'Jaw Filler', price: '15,000' },
        { name: 'Nose Filler', price: '20,000' },
        { name: 'Nasolabial Fold', price: '15,000' },
        { name: 'Undereye Filler', price: '20,000' },
      ],
    },
    {
      category: 'SLIMMING TREATMENT',
      services: [
        { name: 'Double Chin', price: '10,000' },
        { name: 'Jaw Line', price: '15,000' },
        { name: 'Whole Abdomen Area', price: '10,000' },
        { name: 'Arms (2)', price: '10,000' },
        { name: 'Thigh (2)', price: '10,000' },
        { name: 'Mounjaro Tirzepetide', price: '25,000' },
      ],
    },
    {
      category: 'NON-SURGICAL PROCEDURES',
      services: [
        { name: 'Sclerotherapy', price: '10,000' },
        { name: 'Subcision', price: '15,000' },
        { name: 'PRP Scalp Hair Growth', price: '15,000' },
        { name: 'PRP For Whole Face', price: '15,000' },
        { name: 'Mole & Cyst Removal', price: '15,000' },
        { name: 'Celebrity Face Lift', price: '25,000' },
        { name: 'Whole Face BOTOX', price: '40,000' },
        { name: 'V-Line Face Slimming', price: '15,000' },
        { name: 'LIP BACIO LIP BOOSTER', price: '20,000' },
        { name: 'Scalp Hair Implant', price: '2,000', note: '/piece' },
        { name: 'Keloid Injection', price: '5,000' },
        { name: 'Acne Injection', price: '1,500' },
      ],
    },
    {
      category: 'EMS MUSCLE TONING',
      services: [
        { name: 'Whole Abdomen', price: '3,000' },
        { name: 'Butt Area', price: '5,000' },
      ],
    },
    {
      category: 'EXILIFT FACE AND BODY',
      services: [
        { name: 'Double Chin', price: '2,000' },
        { name: 'Whole Face', price: '5,000' },
        { name: 'Whole Abdomen Area', price: '6,000' },
        { name: 'Arms (2)', price: '6,000' },
        { name: 'Thigh (2)', price: '6,000' },
      ],
    },
    {
      category: '12D HIFU',
      services: [
        { name: 'Whole Face', price: '20,000' },
        { name: 'Whole Abdomen', price: '25,000' },
        { name: 'Arms (2)', price: '25,000' },
        { name: 'Legs (2)', price: '25,000' },
      ],
    },
    {
      category: 'THERMAGIC LIFT',
      services: [
        { name: 'Whole Face', price: '25,000' },
        { name: 'Whole Abdomen', price: '25,000' },
        { name: 'Arms (2)', price: '20,000' },
        { name: 'Legs (2)', price: '20,000' },
      ],
    },
    {
      category: 'CRYOLIPO FREEZE SLIMMING',
      services: [
        { name: 'Whole Abdomen', price: '10,000' },
        { name: 'Arms (2)', price: '10,000' },
        { name: 'Legs (2)', price: '10,000' },
      ],
    },
    {
      category: 'RADIO FREQUENCY SLIMMING',
      services: [
        { name: 'Double Chin', price: '700' },
        { name: 'Whole Face', price: '2,000' },
        { name: 'Whole Abdomen Area', price: '2,000' },
        { name: 'Arms (2)', price: '2,000' },
        { name: 'Thigh (2)', price: '2,000' },
      ],
    },
    {
      category: 'GLUTATHIONE TREATMENT',
      services: [
        { name: 'TAD', price: '2,500' },
        { name: 'TATIONIL', price: '2,500' },
        { name: 'THIONE', price: '3,000' },
        { name: 'Shiro Drip', price: '3,500' },
        { name: 'Vitamin C Immuno Drip', price: '2,000' },
        { name: 'Vitamin B Complex Drip', price: '2,000' },
        { name: 'Placenta', price: '3,000' },
        { name: 'Stem Cell', price: '5,000' },
      ],
    },
    {
      category: 'EYELASH EXTENSION',
      services: [
        { name: 'Lumière Lashes (Light)', price: '899' },
        { name: 'Moyenne Lashes (Medium)', price: '1,299' },
        { name: 'Lourde Lashes (Heavy)', price: '1,499' },
        { name: 'EyeLash Lift with Tint', price: '1,499' },
      ],
    },
  ];

  const filteredCategories = serviceCategories
    .map((category) => ({
      ...category,
      services: category.services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.services.length > 0);

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
        <motion.div {...fadeIn} className="text-center mb-12">
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Treatment <span className="italic text-primary">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive medical aesthetics services performed exclusively by PRC-licensed doctors
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              data-testid="input-search-services"
            />
          </div>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="border-l-2 border-primary pl-6 mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-card p-4 border border-border hover:border-primary transition-colors"
                    data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-medium leading-tight">{service.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <p className="font-serif text-lg font-semibold text-primary">
                          ₱{service.price}
                        </p>
                        {service.note && (
                          <p className="text-xs text-muted-foreground">{service.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          {...fadeIn}
          className="mt-20 p-6 bg-muted/50 border-l-2 border-primary"
        >
          <p className="text-sm text-muted-foreground italic">
            All non-surgical procedures are performed exclusively by a Licensed Aesthetic Doctor holding a valid PRC license.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeIn} className="text-center mt-12">
          <p className="text-lg mb-6">Ready to book your treatment?</p>
          <a
            href="https://www.facebook.com/asiaderm.aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            data-testid="button-book-services"
          >
            Book via Messenger
          </a>
        </motion.div>
      </div>
    </div>
  );
}
