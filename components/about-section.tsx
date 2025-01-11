"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Heart, Laptop, Sparkles } from "lucide-react";

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  description,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    className="group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
  >
    <div className="flex items-center gap-4">
      <div className="rounded-lg bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="mt-4 text-muted-foreground">{description}</p>
    <motion.div
      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"
      initial={false}
      whileHover={{ scale: 1.02 }}
    />
  </motion.div>
);

const AnimatedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-block"
  >
    {children}
  </motion.span>
);

// Pre-defined particle positions for SSR consistency
const particlePositions = [
  { left: "10%", top: "20%" },
  { left: "30%", top: "50%" },
  { left: "50%", top: "30%" },
  { left: "70%", top: "60%" },
  { left: "90%", top: "40%" },
  { left: "20%", top: "80%" },
];

const FloatingParticle: React.FC<{
  position: { left: string; top: string };
}> = ({ position }) => (
  <motion.div
    className="absolute h-2 w-2 rounded-full bg-primary/20"
    style={position}
    animate={{
      y: [-10, 10],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default function EnhancedAboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Specialized in building scalable web applications using modern technologies and best practices.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description:
        "Passionate about solving complex technical challenges and optimizing performance.",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description:
        "Committed to creating intuitive and accessible user experiences that delight.",
    },
  ];

  const interests = [
    "📍 Exploring local coffee shops in search of the perfect brew",
    "🎮 Gaming and staying up-to-date with tech trends",
    "📚 Learning new technologies and sharing knowledge",
    "🌱 Contributing to open-source projects",
  ];

  return (
    <section className="relative overflow-hidden py-24" ref={containerRef}>
      {/* Static particle positions for SSR */}
      {particlePositions.map((position, i) => (
        <FloatingParticle key={i} position={position} />
      ))}

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
          >
            <Sparkles className="h-8 w-8 text-primary" />
          </motion.div>

          <motion.h2
            className="mb-6 text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="mx-auto max-w-3xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <AnimatedText>
              Hi there! I&apos;m a passionate full-stack developer with a deep
              love for creating beautiful and functional web applications. With
              a keen eye for detail and a dedication to clean code, I transform
              ideas into reality.
            </AnimatedText>

            <AnimatedText>
              <p className="mt-4">
                When I&apos;m not immersed in code, you might find me:
              </p>
            </AnimatedText>

            <motion.ul
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {interests.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-4 rounded-xl bg-primary/5 p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Laptop className="h-6 w-6 text-primary" />
          <p className="text-lg">
            Currently working on exciting projects and always open to new
            opportunities!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
