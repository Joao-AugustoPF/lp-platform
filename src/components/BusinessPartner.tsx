import React from 'react';
import { motion } from 'framer-motion';

const BusinessPartner: React.FC = () => {
  const partners = [
    { src: 'amazon.svg', alt: 'Amazon', delay: 0.1 },
    { src: 'google.svg', alt: 'Google', delay: 0.3 },
    { src: 'lenovo.svg', alt: 'Lenovo', delay: 0.5 },
    { src: 'paypal.svg', alt: 'Paypal', delay: 0.7 },
    { src: 'shopify.svg', alt: 'Shopify', delay: 0.9 },
    { src: 'spotify.svg', alt: 'Spotify', delay: 1.1 },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-6 grid-cols-2 gap-[60px] items-center justify-items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: partner.delay }}
            >
              <img
                src={partner.src}
                className="h-8 dark:filter dark:invert" // Inverte as cores para ficar bem no dark mode
                alt={partner.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessPartner;
