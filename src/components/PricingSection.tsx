import React from 'react';
import { motion } from 'framer-motion';

const PricingSection: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="pricing" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="lg:col-span-5" variants={fadeInUp}>
            <div className="lg:text-start text-center">
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-gray-900 dark:text-white">
                Our Comfortable Rates
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.
              </p>
              <div className="mt-6">
                <a
                  href="page-pricing.html"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                >
                  <i className="uil uil-master-card"></i> Subscribe Now
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 mt-8 lg:mt-0"
            variants={fadeInUp}
          >
            <div className="lg:ms-8 relative">
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px] relative">
                <motion.div
                  className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-100 dark:bg-gray-800 transform lg:scale-100 scale-95"
                  variants={fadeInUp}
                >
                  <div className="p-6 py-8">
                    <h6 className="font-bold uppercase mb-5 text-indigo-600 dark:text-indigo-400">
                      Starter
                    </h6>
                    <div className="flex mb-5">
                      <span className="text-xl font-semibold text-gray-900 dark:text-white">
                        $
                      </span>
                      <span className="price text-4xl font-semibold mb-0 text-gray-900 dark:text-white">
                        39
                      </span>
                      <span className="text-xl font-semibold self-end mb-1 text-gray-900 dark:text-white">
                        /mo
                      </span>
                    </div>
                    <ul className="list-none text-gray-700 dark:text-gray-300">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Full Access
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Source Files
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Free Appointments
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Enhanced Security
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="group border-b-[3px] dark:border-gray-700 relative shadow-lg dark:shadow-gray-900 rounded-md z-10 bg-gray-50 dark:bg-gray-900 transform lg:scale-105 scale-100"
                  variants={fadeInUp}
                  style={{ marginTop: '-20px', marginLeft: '-20px' }}
                >
                  <div className="p-6 py-8 md:ps-10">
                    <h6 className="font-bold uppercase mb-5 text-indigo-600 dark:text-indigo-400">
                      Professional
                    </h6>
                    <div className="flex mb-5">
                      <span className="text-xl font-semibold text-gray-900 dark:text-white">
                        $
                      </span>
                      <span className="price text-4xl font-semibold mb-0 text-gray-900 dark:text-white">
                        59
                      </span>
                      <span className="text-xl font-semibold self-end mb-1 text-gray-900 dark:text-white">
                        /mo
                      </span>
                    </div>
                    <ul className="list-none text-gray-700 dark:text-gray-300">
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Full Access
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Source Files
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Free Appointments
                      </li>
                      <li className="mb-1 flex">
                        <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                        Enhanced Security
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
                    >
                      Try it Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
