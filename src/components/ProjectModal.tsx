"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { HiExternalLink, HiX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-background text-foreground rounded-2xl max-w-3xl w-full p-6 relative shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-foreground/60 hover:text-accent transition-colors"
            aria-label="Close modal"
            title="Close"
          >
            <HiX className="h-6 w-6" />
          </button>

          <h3 className="font-heading text-2xl font-bold mb-4">{project.title}</h3>

          <p className="text-foreground/80 mb-4">{project.longDescription}</p>

          {project.technologies?.length && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span>Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <HiExternalLink className="h-5 w-5" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
