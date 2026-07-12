import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, SkillCardSkeleton } from '@/components';
import { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
  loading: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, loading }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">Skills</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <SkillCardSkeleton key={i} />)
          ) : (
            Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
              <ScrollReveal key={category} delay={index * 0.1}>
                <motion.div 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className="bg-primary h-1.5 sm:h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
