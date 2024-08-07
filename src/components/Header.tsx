import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const navItems = ['Home', 'Features', 'Testimonials', 'Pricing', 'FAQ'];

  return (
    <header className="bg-slate-50 dark:bg-slate-900 shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          className="text-indigo-600 text-2xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FlowTask
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <ThemeToggle />
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: navItems.length * 0.1 }}
        >
          <a
            href="#"
            className="py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300"
          >
            Get Started
          </a>
        </motion.div>

        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <motion.button
            className="text-indigo-600 focus:outline-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
