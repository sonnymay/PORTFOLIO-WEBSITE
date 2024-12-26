import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sonny May</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
