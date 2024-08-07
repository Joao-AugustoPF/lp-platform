import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="md:text-3xl text-2xl font-semibold text-gray-900 dark:text-white"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Ready to Boost Your Team's Productivity?
          </motion.h3>
          <motion.p
            className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto mt-4"
            variants={fadeInUp}
          >
            A final compelling message encouraging users to take action.
          </motion.p>
          <motion.div className="mt-6" variants={fadeInUp}>
            <a
              href="#"
              className="py-3 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              Start Your Free Trial Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
