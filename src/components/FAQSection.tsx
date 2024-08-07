import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is Tailwind CSS?',
    answer:
      'Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.',
  },
  {
    question: 'How does it differ from other CSS frameworks?',
    answer:
      'Unlike other CSS frameworks that provide pre-designed components, Tailwind offers utility classes that let you build custom designs without overriding styles.',
  },
  {
    question: 'Is Tailwind CSS good for large projects?',
    answer:
      'Yes, Tailwind CSS is highly scalable and works well for large projects where custom design and consistency are required.',
  },
  {
    question: 'Can I use Tailwind CSS with React?',
    answer:
      'Absolutely! Tailwind CSS works seamlessly with React and other modern JavaScript frameworks.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto mt-4">
            Here are some of the most common questions we receive. If you have
            any others, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 grid-cols-1 gap-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md dark:shadow-gray-800 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  {faq.question}
                </h4>
                <span className="text-indigo-600 dark:text-indigo-400">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              <motion.div
                className="mt-4 overflow-hidden"
                initial="hidden"
                animate={openIndex === index ? 'visible' : 'hidden'}
                variants={faqVariants}
                transition={{ duration: 0.3 }}
              >
                <p className="text-slate-400 dark:text-slate-300">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
