import React from 'react';
import { ProjectCard, ProjectCardSkeleton } from '@/components';
import { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
  loading: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedTechnology: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTechnologyChange: (value: string) => void;
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  loading,
  searchQuery,
  selectedCategory,
  selectedTechnology,
  onSearchChange,
  onCategoryChange,
  onTechnologyChange,
  onProjectClick,
}) => {
  // Get unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on search, category, and technology
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesTechnology = selectedTechnology === 'all' || 
                            project.technologies.includes(selectedTechnology);
    
    return matchesSearch && matchesCategory && matchesTechnology;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Projects</h2>
        
        {/* Search and Filter */}
        <div className="mb-6 sm:mb-8 space-y-4" role="search" aria-label="Filter projects">
          <label htmlFor="search-input" className="sr-only">Search projects</label>
          <input
            id="search-input"
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
          />
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <label htmlFor="category-select" className="sr-only">Filter by category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
            >
              <option value="all">All Categories</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="data">Data Analysis</option>
              <option value="other">Other</option>
            </select>
            
            <label htmlFor="technology-select" className="sr-only">Filter by technology</label>
            <select
              id="technology-select"
              value={selectedTechnology}
              onChange={(e) => onTechnologyChange(e.target.value)}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm sm:text-base"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => <ProjectCardSkeleton key={i} />)}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
