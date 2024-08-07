import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-16">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {/* About Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h5 className="font-semibold text-lg mb-6">About Us</h5>
          <p className="text-slate-400">
            We are a team of designers and developers that create high quality
            websites and applications to help businesses grow.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h5 className="font-semibold text-lg mb-6">Quick Links</h5>
          <ul className="list-none space-y-4">
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h5 className="font-semibold text-lg mb-6">Contact Us</h5>
          <ul className="list-none space-y-4">
            <li className="text-slate-400">
              <i className="mdi mdi-map-marker-outline mr-2"></i>123 Street,
              City, Country
            </li>
            <li className="text-slate-400">
              <i className="mdi mdi-phone mr-2"></i>(123) 456-7890
            </li>
            <li className="text-slate-400">
              <i className="mdi mdi-email-outline mr-2"></i>info@company.com
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white">
              <i className="mdi mdi-facebook"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <i className="mdi mdi-twitter"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <i className="mdi mdi-instagram"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-white">
              <i className="mdi mdi-linkedin"></i>
            </a>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="z-10"
        >
          <h5 className="font-semibold text-lg mb-6">Newsletter</h5>
          <p className="text-slate-400 mb-4">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="flex ">
            <input
              type="email"
              className="w-full p-2 rounded-l-md text-black"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-400">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
