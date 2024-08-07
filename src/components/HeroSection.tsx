import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900"
    >
      <div className="container relative z-2 flex justify-center min-h-screen">
        <div className="grid grid-cols-1 md:mt-44 mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 dark:text-white">
              Unleash Your Team's Full Potential with FlowTask
            </h4>
            <p className="text-slate-400 text-lg max-w-xl mx-auto dark:text-slate-300">
              Simplify project management, enhance collaboration, and hit every
              deadline with ease. FlowTask is your all-in-one solution to team
              productivity.
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                Start Your Free Trial
              </a>

              <p className="text-slate-400 text-sm mt-3 dark:text-slate-300">
                No credit card required. Free 14-days trial
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-8 z-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="classic01.png" alt="" />
          </motion.div>
        </div>
        <div className="bg-indigo-600 w-8 h-16 z-2 absolute start-2 lg:bottom-28 md:bottom-36 sm:bottom-40 bottom-16"></div>
        <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute start-12 lg:bottom-32 md:bottom-40 sm:bottom-44 bottom-20"></div>
        <div className="bg-indigo-600/20 w-8 h-16 z-2 absolute end-12 xl:bottom-[420px] lg:bottom-[315px] md:bottom-[285px] sm:bottom-80 bottom-32"></div>
        <div className="bg-indigo-600 w-8 h-16 z-2 absolute end-2 xl:bottom-[440px] lg:bottom-[335px] md:bottom-[305px] sm:bottom-[340px] bottom-36"></div>
      </div>
    </section>
  );
};

export default HeroSection;
