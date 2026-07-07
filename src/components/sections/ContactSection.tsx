import React from 'react';
import { Button } from '@/components';
import { Contact } from '@/types';

interface ContactSectionProps {
  contact: Contact | null;
  loading: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, loading }) => {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Contact Me</h2>
        {loading ? (
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                I'm currently looking for new opportunities. Feel free to reach out!
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href={`mailto:${contact?.email}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-xl sm:text-2xl">📧</span>
                  <span className="text-sm sm:text-base break-all">{contact?.email}</span>
                </a>
                <a
                  href={contact?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-xl sm:text-2xl">💼</span>
                  <span className="text-sm sm:text-base">LinkedIn Profile</span>
                </a>
                <a
                  href={contact?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <span className="text-xl sm:text-2xl">💻</span>
                  <span className="text-sm sm:text-base">GitHub Profile</span>
                </a>
              </div>
            </div>
            <form className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg" aria-label="Contact form">
              <div className="space-y-3 sm:space-y-4">
                <label htmlFor="contact-name" className="sr-only">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
                  aria-required="true"
                />
                <label htmlFor="contact-email" className="sr-only">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
                  aria-required="true"
                />
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none text-sm sm:text-base"
                  aria-required="true"
                ></textarea>
                <Button className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
