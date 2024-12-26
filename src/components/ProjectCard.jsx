import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';

const ProjectCard = ({ project, onOpenModal }) => {
  const { title, description, image, tags, github, demo } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <ExternalLink size={24} />
          </motion.a>
          <motion.button
            onClick={() => onOpenModal(project)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Eye size={24} />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;