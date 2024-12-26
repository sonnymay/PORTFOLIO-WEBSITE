import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -inset-[10px] opacity-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Software Engineer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200">
              Hi, I'm Sonny May
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I build modern web applications with a focus on user experience and performance.
            </p>
            
            <div className="flex justify-center gap-4">
              <motion.a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
