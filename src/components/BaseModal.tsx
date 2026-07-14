import React, { useEffect } from 'react';

interface BaseModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * BaseModal
 *
 * Shared modal wrapper used by both the Project modal and the Blog modal.
 * Handles the parts that were previously duplicated in each: closing on
 * Escape key press, closing on backdrop click (while stopping clicks
 * inside the modal from bubbling up), the close ("x") button, and the
 * accessible dialog attributes.
 *
 * Each specific modal only needs to provide its own inner content as
 * `children` (image, heading, body, buttons, etc.).
 */
export const BaseModal: React.FC<BaseModalProps> = ({ onClose, children }) => {
  // Close the modal when the user presses Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

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

        {children}
      </div>
    </div>
  );
};
