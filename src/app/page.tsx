'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components';
import { Project, Skill, Profile, Contact, BlogArticle } from '@/types';

/**
 * All sections are loaded with next/dynamic to reduce initial bundle size.
 * Navbar and HeroSection use loading states to improve perceived performance.
 */
const Navbar = dynamic(() => import('@/components/Navbar').then(m => m.Navbar), { ssr: true });
const HeroSection = dynamic(
  () => import('@/components/sections/HeroSection').then(m => m.HeroSection),
  { loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div> }
);
const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(m => m.AboutSection), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection').then(m => m.SkillsSection), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection').then(m => m.ProjectsSection), { ssr: false });
const BlogSection = dynamic(() => import('@/components/sections/BlogSection').then(m => m.BlogSection), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(m => m.ContactSection), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer').then(m => m.Footer), { ssr: false });
const Modal = dynamic(() => import('@/components/Modal').then(m => m.Modal), { ssr: false });
const BlogModal = dynamic(() => import('@/components/BlogModal').then(m => m.BlogModal), { ssr: false });

/**
 * Home Page Component
 * 
 * Main portfolio page with all sections and data fetching logic.
 * Handles API calls, state management, and modal interactions.
 */
export default function Home() {
  // Data state
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [blogArticles, setBlogArticles] = useState<BlogArticle[]>([]);
  
  // Modal state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  
  // Loading and error state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search and filter states for projects
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  // Fetch all data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Fetch all portfolio data from API endpoints
   * Uses Promise.all for parallel requests
   */
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [profileRes, skillsRes, projectsRes, contactRes, blogRes] = await Promise.all([
        fetch('/api/profile'),
        fetch('/api/skills'),
        fetch('/api/projects'),
        fetch('/api/contact'),
        fetch('/api/blog')
      ]);

      if (!profileRes.ok || !skillsRes.ok || !projectsRes.ok || !contactRes.ok || !blogRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [profileData, skillsData, projectsData, contactData, blogData] = await Promise.all([
        profileRes.json(),
        skillsRes.json(),
        projectsRes.json(),
        contactRes.json(),
        blogRes.json()
      ]);

      setProfile(profileData);
      setSkills(skillsData);
      setProjects(projectsData);
      setContact(contactData);
      setBlogArticles(blogData);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Data</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
            <Button onClick={fetchData}>Try Again</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar />
      
      <main id="main-content">
        <HeroSection profile={profile} loading={loading} />
        <AboutSection profile={profile} loading={loading} />
        <SkillsSection skills={skills} loading={loading} />
        <ProjectsSection 
          projects={projects}
          loading={loading}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          onSearchChange={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onProjectClick={setSelectedProject}
        />
        <BlogSection 
          blogArticles={blogArticles}
          loading={loading}
          onArticleClick={setSelectedArticle}
        />
        <ContactSection contact={contact} loading={loading} />
      </main>

      <Footer />
      
      {/* Project Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      
      {/* Blog Modal */}
      {selectedArticle && (
        <BlogModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </div>
  );
}
