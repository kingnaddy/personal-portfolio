"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiFirebase,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiVisualstudiocode,
  SiTailwindcss,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiFramer
} from "react-icons/si";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "PHP", icon: SiPhp, color: "#8892BE" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "SQL", icon: SiSqlite, color: "#003B57" }
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow Lite", icon: SiTensorflow, color: "#FF6F00" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "Matplotlib", icon: SiPandas, color: "#11557C" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" }
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37726" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            From embedded AI systems to full-stack web apps, I’ve worked across a wide range of tools and frameworks to bring technical ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="cursor-hover flex items-center space-x-3 p-3 rounded-2xl transition-colors hover:bg-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon 
                      className="h-8 w-8" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
