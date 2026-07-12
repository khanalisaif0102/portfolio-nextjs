import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components';
import { Profile } from '@/types';

interface HeroSectionProps {
  profile: Profile | null;
  loading: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, loading }) => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {loading ? (
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/3"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-2/3"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
              </div>
            ) : (
              <>
                <motion.p 
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, I'm
                </motion.p>
                <motion.h1 
                  id="hero-heading" 
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {profile?.name}
                </motion.h1>
                <motion.h2 
                  className="text-xl md:text-2xl lg:text-3xl text-primary mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {profile?.title}
                </motion.h2>
                <motion.p 
                  className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {profile?.description}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
                    View Projects
                  </Button>
                  <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto">
                    Contact Me
                  </Button>
                </motion.div>
              </>
            )}
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {loading ? (
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            ) : (
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                <Image
                  src={profile?.heroImage || '/hero.png'}
                  alt={profile?.name || 'Profile'}
                  fill
                  priority
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
