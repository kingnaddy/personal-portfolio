"use client";

import { useTheme } from "@/hooks/useTheme";
import { HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="cursor-hover rounded-2xl bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <HiSun className="h-5 w-5 text-yellow-400" />
      ) : (
        <HiMoon className="h-5 w-5 text-blue-400" />
      )}
    </motion.button>
  );
};
