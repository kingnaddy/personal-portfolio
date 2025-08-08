"use client";

import { motion } from "framer-motion";
import { HiCpuChip, HiBeaker, HiGlobeAlt } from "react-icons/hi2";

export const About = () => {
  const features = [
    {
      icon: HiCpuChip,
      title: "AI/ML Engineering",
      description: "Building ethical, embedded, and real-world intelligent systems using TensorFlow Lite, Firebase, and Python.",
    },
    {
      icon: HiBeaker,
      title: "Hands-On Research",
      description: "From voice cloning with OpenVoice to ML image classification, I love working at the intersection of data, devices, and design.",
    },
    {
      icon: HiGlobeAlt,
      title: "Human-Centered Impact",
      description: "My work is driven by accessibility, equity, and making AI approachable for real-world communities.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Emerging AI/ML engineer with a knack for robotics & full-stack development — passionate about bringing a human touch to this age of AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I’m currently pursuing my B.S. in Computer Science at Howard University (4.0 GPA) while exploring how AI can meet real-world needs — from assistive tools to predictive systems.
              </p>
              <p>
                My experiences span embedded ML with IoT, OpenVoice-based voice cloning, and building projects that merge data, ethics, and user experience — including a top-ranked health predictor and a proximity-based community app.
              </p>
              <p>
                Beyond code, I’m driven by curiosity and care — aiming to make intelligent systems that are trustworthy, equitable, and human-first.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cursor-hover bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-colors hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-2xl">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
