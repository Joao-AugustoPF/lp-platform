import React from 'react';
import { motion } from 'framer-motion';

const StickyCTA: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-indigo-600 text-white py-4"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p className="font-semibold">
          Ready to Boost Your Team's Productivity?
        </p>
        <a
          href="#"
          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white text-indigo-600 border-white hover:bg-gray-200 hover:border-gray-200 rounded-md"
        >
          Start Your Free Trial Today
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
