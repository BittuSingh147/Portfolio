"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode2,
  Layers,
  Database,
  Server,
  Globe,
  Boxes,
  FileCode,
} from "lucide-react";

interface SkillCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  proficiency: number;
  index: number;
  onSelect: () => void;
  isSelected: boolean;
}

interface Skill {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  proficiency: number;
  features: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  description,
  proficiency,
  index,
  onSelect,
  isSelected,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ scale: 1.02, rotateX: 5 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className={`group relative rounded-xl border bg-card p-6 shadow-md transition-all cursor-pointer
        ${isSelected ? "border-primary" : "border-transparent"}`}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent -z-10 rounded-xl opacity-0 group-hover:opacity-100"
        animate={{
          backgroundPosition: isHovered ? ["0%", "100%"] : ["100%", "100%"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="flex items-center gap-4">
        <motion.div
          className="rounded-lg bg-primary/10 p-3"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="mt-4 text-muted-foreground">{description}</p>

      <div className="mt-4">
        <div className="text-sm text-muted-foreground mb-2">Proficiency</div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

interface SkillDetailsProps {
  skill: Skill;
  onClose: () => void;
}

const SkillDetails: React.FC<SkillDetailsProps> = ({ skill, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      className="bg-card p-6 rounded-xl shadow-lg max-w-lg w-full"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="rounded-lg bg-primary/10 p-3">
          <skill.icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">{skill.title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{skill.description}</p>
      <div className="grid gap-4">
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Key Features</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {skill.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const skills: Skill[] = [
  {
    icon: FileCode, // Icon component from lucide-react
    title: "JavaScript",
    description:
      "Building dynamic and interactive web applications using JavaScript.",
    proficiency: 85,
    features: [
      "DOM Manipulation",
      "Event Handling",
      "Asynchronous Programming",
      "ES6+ Features",
    ],
  },
  {
    icon: FileCode2,
    title: "React.js",
    description:
      "Building modern user interfaces with React's component-based architecture.",
    proficiency: 90,
    features: [
      "Component Lifecycle",
      "State Management",
      "Hooks & Custom Hooks",
      "Performance Optimization",
    ],
  },
  {
    icon: Globe,
    title: "Next.js",
    description:
      "Creating full-stack React applications with server-side rendering capabilities.",
    proficiency: 85,
    features: [
      "Server-side Rendering",
      "API Routes",
      "Static Site Generation",
      "Dynamic Routing",
    ],
  },
  {
    icon: Server,
    title: "Node.js",
    description:
      "Developing scalable backend services and REST APIs with Node.js.",
    proficiency: 88,
    features: [
      "Event Loop",
      "Async Programming",
      "Stream Processing",
      "Module System",
    ],
  },
  {
    icon: Layers,
    title: "Express.js",
    description:
      "Building robust web applications and APIs using Express framework.",
    proficiency: 85,
    features: ["Middleware", "Routing", "Error Handling", "Authentication"],
  },
  {
    icon: Database,
    title: "MongoDB",
    description:
      "Working with NoSQL databases for flexible data storage solutions.",
    proficiency: 82,
    features: [
      "CRUD Operations",
      "Aggregation Pipeline",
      "Indexing",
      "Schema Design",
    ],
  },
  {
    icon: Boxes,
    title: "PostgreSQL",
    description:
      "Managing relational databases with advanced SQL capabilities.",
    proficiency: 80,
    features: [
      "Complex Queries",
      "Stored Procedures",
      "Triggers",
      "Performance Tuning",
    ],
  },
  {
    icon: Code2,
    title: "TypeScript",
    description:
      "Writing type-safe JavaScript code for better development experience.",
    proficiency: 85,
    features: ["Type System", "Interfaces", "Generics", "Decorators"],
  },
];

export default function SkillsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section className="relative overflow-hidden py-24" ref={containerRef}>
      <AnimatePresence>
        {selectedSkill && (
          <SkillDetails
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Full Stack Development Skills
          </motion.h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Expertise in modern web development technologies and frameworks
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              proficiency={skill.proficiency}
              index={index}
              onSelect={() => setSelectedSkill(skill)}
              isSelected={selectedSkill?.title === skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
