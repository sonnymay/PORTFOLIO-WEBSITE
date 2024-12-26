import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import Timeline from './Timeline';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate software engineer focused on creating efficient and user-friendly web applications. 
              With a strong foundation in modern web technologies, I enjoy turning complex problems into simple, 
              beautiful, and intuitive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              <Timeline />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
