import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
