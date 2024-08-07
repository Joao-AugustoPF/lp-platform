import React from 'react';
import { motion } from 'framer-motion';

const WhyEveryoneLovesTechwind: React.FC = () => {
  // console.log(window.innerWidth);

  return (
    <section id="features" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center container mx-auto px-4 md:mt-24 mt-16">
        <div className="flex flex-col items-center text-center pb-8">
          <motion.h3
            className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-gray-900 dark:text-white"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            initial={{ opacity: 0, y: 20 }}
          >
            Features That Transform Your Workflow
          </motion.h3>

          <motion.p
            className="text-slate-400 dark:text-slate-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Briefly describe common pain points teams face in project
            management—scattered tasks, missed deadlines, and poor
            communication.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-16 gap-12">
          <motion.div
            className="flex justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img
              src="classic02.png"
              className="rounded-lg shadow-md dark:shadow-gray-800 max-w-full h-auto"
              alt=""
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h4 className="mb-4 text-2xl leading-normal font-medium text-gray-900 dark:text-white">
              Features That Transform Your Workflow
            </h4>
            <p className="text-slate-400 dark:text-slate-300">
              Due to its widespread use as filler text for layouts,
              non-readability is of great importance: human perception is tuned
              to recognize certain patterns and repetitions in texts. If the
              distribution of letters visual impact.
            </p>
            <ul className="list-none text-slate-400 dark:text-slate-300 mt-4">
              <li className="mb-1 flex items-center">
                <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                Task Automation
              </li>
              <li className="mb-1 flex items-center">
                <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                Real-Time Collaboration
              </li>
              <li className="mb-1 flex items-center">
                <i className="uil uil-check-circle text-indigo-600 dark:text-indigo-400 text-xl me-2"></i>
                Integrated Communication
              </li>
            </ul>

            <div className="mt-4">
              <a
                href="page-aboutus.html"
                className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 after:bg-indigo-600 dark:after:bg-indigo-400 duration-500 ease-in-out"
              >
                See All Features
                <i className="uil uil-angle-right-b align-middle"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyEveryoneLovesTechwind;
