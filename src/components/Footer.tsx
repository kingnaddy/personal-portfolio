"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-6 relative">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Noble Adike. All rights reserved.
        </p>
      </motion.div>

      {showTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-accent text-background shadow-lg cursor-pointer hover:bg-accent/80 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to Top"
        >
          <HiArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </footer>
  );
};
