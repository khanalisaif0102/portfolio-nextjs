import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Button } from './Button';
import { BaseModal } from './BaseModal';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Modal
 *
 * Displays full details for a selected project: image, description,
 * technologies used, and links to the live demo / GitHub repo.
 * The shared backdrop, escape-key handling, and close button all live
 * in BaseModal — this component only defines the project-specific content.
 */
export const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <BaseModal onClose={onClose}>
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
    </BaseModal>
  );
};
