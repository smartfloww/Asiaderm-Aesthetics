import { motion } from 'framer-motion';
import { useState } from 'react';
import { BeforeAfterSlider } from '@/components/ui/before-after-slider';
import { asset } from '@/lib/asset';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleries = [
    {
      category: 'Acne Treatment',
      items: [
        {
          beforeImage: asset('assets/face-acne-1-before.png'),
          afterImage: asset('assets/face-acne-1-after.png'),
        },
        {
          beforeImage: asset('assets/face-acne-2-before.png'),
          afterImage: asset('assets/face-acne-2_after.png'),
        },
        {
          beforeImage: asset('assets/face-acne-3-before.png'),
          afterImage: asset('assets/face-acne-3-after.png'),
        },
      ],
    },
    {
      category: 'Skin Rejuvenation',
      items: [
        {
          type: 'single',
          image: asset('assets/face-cleaning-before-after.png'),
        },
      ],
    },
    {
      category: 'Tattoo Removal',
      items: [
        {
          beforeImage: asset('assets/tatto_before.png'),
          afterImage: asset('assets/tatto-after.png'),
        },
      ],
    },
  ];

  const filters = ['All', ...galleries.map((g) => g.category)];

  const filteredGalleries =
    activeFilter === 'All'
      ? galleries
      : galleries.filter((g) => g.category === activeFilter);

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
            Before & <span className="italic text-primary">After</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from our PRC-licensed aesthetic doctors. Drag the slider to reveal results.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div {...fadeIn} className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border hover:border-primary text-foreground'
              }`}
              data-testid={`button-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="space-y-16">
          {filteredGalleries.map((gallery, galleryIndex) => (
            <motion.div
              key={gallery.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: galleryIndex * 0.1 }}
            >
              <div className="border-l-2 border-primary pl-6 mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold">
                  {gallery.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.items.map((item, itemIndex) =>
                  item.type === 'single' ? (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="aspect-[4/3] overflow-hidden bg-card"
                    >
                      <img
                        src={item.image}
                        alt={`${gallery.category} result`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    >
                      <BeforeAfterSlider
                        beforeImage={item.beforeImage!}
                        afterImage={item.afterImage!}
                        beforeLabel="Before"
                        afterLabel="After"
                      />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeIn} className="text-center mt-20">
          <p className="text-lg mb-6">
            Interested in achieving similar results? Schedule a consultation.
          </p>
          <a
            href="https://www.facebook.com/asiaderm.aesthetics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            data-testid="button-book-gallery"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}
