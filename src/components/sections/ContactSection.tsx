import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, Button } from '@/components';
import { Contact } from '@/types';

/**
 * Contact Section Component
 * 
 * Displays contact information and a contact form with validation.
 * Features real-time validation, success/error messages, and hover animations.
 */
interface ContactSectionProps {
  contact: Contact | null;
  loading: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  /**
   * Validate form fields
   * Checks for required fields and email format
   */
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   * Validates form, sends data to the /api/contact endpoint,
   * and shows a success or error message based on the response.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear the status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  /**
   * Handle input change
   * Updates form state and clears error for the changed field
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center">Contact Me</h2>
        </ScrollReveal>
        {loading ? (
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  I'm currently looking for new opportunities. Feel free to reach out!
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <motion.a
                    href={`mailto:${contact?.email}`}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl sm:text-2xl">📧</span>
                    <span className="text-sm sm:text-base break-all">{contact?.email}</span>
                  </motion.a>
                  <motion.a
                    href={contact?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl sm:text-2xl">💼</span>
                    <span className="text-sm sm:text-base">LinkedIn Profile</span>
                  </motion.a>
                  <motion.a
                    href={contact?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl sm:text-2xl">💻</span>
                    <span className="text-sm sm:text-base">GitHub Profile</span>
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-lg" aria-label="Contact form">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <motion.input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base`}
                      aria-required="true"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <motion.input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base`}
                      aria-required="true"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <motion.textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none text-sm sm:text-base`}
                      aria-required="true"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    ></motion.textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button 
                    className="w-full" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 text-sm text-center"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm text-center"
                    >
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
};
