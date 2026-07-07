import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Button } from './Button';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative h-64 md:h-80">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 id="modal-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 mt-auto">
              <Button onClick={() => window.open(project.demoLink, '_blank')}>
                Live Demo
              </Button>
              <Button variant="secondary" onClick={() => window.open(project.githubLink, '_blank')}>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
