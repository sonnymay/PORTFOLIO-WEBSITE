import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Tech Company',
    description: 'Working on modern web applications using React and Node.js'
  },
  {
    year: '2022',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Developed responsive websites and web applications'
  },
  {
    year: '2021',
    title: 'Web Developer Intern',
    company: 'Startup',
    description: 'Learned modern web development practices and technologies'
  }
];

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

      {/* Timeline items */}
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-12"
          >
            {/* Circle on timeline */}
            <div className="absolute left-0 top-1.5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">{item.year}</span>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                {item.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;