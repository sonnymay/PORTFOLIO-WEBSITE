import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GitHub, Linkedin, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: <GitHub className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/sonnymay',
      href: 'https://github.com/sonnymay'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sonnymay',
      href: 'https://linkedin.com/in/sonnymay'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'Your Location',
      href: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        Get in Touch
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>

      <div className="space-y-4">
        {contactDetails.map((contact, index) => (
          <motion.div
            key={contact.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
              {contact.icon}
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {contact.label}
              </p>
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-base text-gray-900 dark:text-white">
                  {contact.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;