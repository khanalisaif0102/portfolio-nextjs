import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, Button } from '@/components';
import { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile | null;
  loading: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, loading }) => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">About Me</h2>
        </ScrollReveal>
        {loading ? (
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
          </div>
        ) : (
          <ScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {profile?.name}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {profile?.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Title</h4>
                    <p className="text-gray-600 dark:text-gray-300">{profile?.title}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">{profile?.email}</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h4>
                    <a 
                      href={profile?.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      View Profile
                    </a>
                  </motion.div>
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h4>
                    <a 
                      href={profile?.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      View Profile
                    </a>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="w-full" onClick={() => window.open('/resume.pdf', '_blank')}>
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};
