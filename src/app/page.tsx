'use client';

import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  Footer, 
  Modal, 
  BlogModal, 
  Button,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  BlogSection,
  ContactSection
} from '@/components';
import { Project, Skill, Profile, Contact, BlogArticle } from '@/types';

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [blogArticles, setBlogArticles] = useState<BlogArticle[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

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
