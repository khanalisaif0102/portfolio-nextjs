import React from 'react';

export const SkeletonLoader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}></div>
  );
};

export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <SkeletonLoader className="w-full h-48" />
      <div className="p-6">
        <SkeletonLoader className="w-3/4 h-6 mb-4" />
        <SkeletonLoader className="w-full h-4 mb-2" />
        <SkeletonLoader className="w-1/2 h-4 mb-4" />
        <div className="flex gap-2 mb-4">
          <SkeletonLoader className="w-16 h-6" />
          <SkeletonLoader className="w-16 h-6" />
          <SkeletonLoader className="w-16 h-6" />
        </div>
        <div className="flex gap-2">
          <SkeletonLoader className="w-20 h-8" />
          <SkeletonLoader className="w-20 h-8" />
        </div>
      </div>
    </div>
  );
};

export const SkillCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <SkeletonLoader className="w-1/2 h-6 mb-4" />
      <SkeletonLoader className="w-full h-3 mb-2" />
      <SkeletonLoader className="w-full h-8" />
    </div>
  );
};
