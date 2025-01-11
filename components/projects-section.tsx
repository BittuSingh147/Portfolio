"use client";

import { useState, useRef, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
  details: string;
}

const projects: Project[] = [
  {
    title: "Spendly",
    description:
      "An AI-powered financial tracker that scans receipts and updates your finances automatically.",
    image: "/procejt1.png", // Fixed typo in image name
    link: "https://spendly-ochre.vercel.app/",
    github: "https://github.com/BittuSingh147/Spendly.git",
    tags: ["Finance", "AI", "Next.js", "Supabase", "Google Gemini"],
    details:
      "Spendly uses Google Gemini AI to automatically scan and update your financial records. The app ensures real-time tracking of both personal and business finances with modern technologies like Next.js and Supabase.",
  },
  {
    title: "DevScripter",
    description:
      "A seamless and interactive code editor with support for multiple languages and real-time execution.",
    image: "/project2.png",
    link: "https://dev-scripter.vercel.app/",
    github: "https://github.com/BittuSingh147/DevScripter.git",
    tags: ["Code Editor", "React", "Next.js", "TailwindCSS", "Piston API"],
    details:
      "This interactive code editor allows developers to run code directly in the browser. Supporting multiple languages via the Piston API, it features mini-map navigation, error detection, and code sharing capabilities.",
  },
  {
    title: "InvoiceSpace",
    description:
      "A full-stack invoice management platform with real-time collaboration and customization.",
    image: "/Project3.png", // Fixed capitalization in image name
    link: "https://invoice-git-main-bittu-singhs-projects.vercel.app/",
    github: "https://github.com/BittuSingh147/Invoice.git",
    tags: ["Invoice Management", "Next.js", "Auth.js", "Shadcn/UI"],
    details:
      "InvoiceSpace is a comprehensive platform for managing invoices and collaborating with teams in real-time. Built with modern technologies ensuring security and scalability.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute" as const,
  }),
};

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const navigate = (newDirection: SetStateAction<number>) => {
    const currentScroll = window.scrollY;
    setDirection(newDirection);
    setCurrentIndex(
      (current) =>
        (current + Number(newDirection) + projects.length) % projects.length
    );
    window.scrollTo(0, currentScroll);
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      className="py-16 bg-gradient-to-b from-background to-secondary/20"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Projects
        </h2>

        <div className="relative h-[500px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3,
                type: { duration: 0 },
              }}
              className="w-full h-full"
            >
              <div className="grid md:grid-cols-2 h-full gap-8">
                <div className="relative group aspect-video">
                  <div className="relative w-full h-full">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      className="object-cover rounded-lg"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Learn More</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{currentProject.title}</DialogTitle>
                          <div className="mt-4">
                            <div className="relative w-full aspect-video mb-4">
                              <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 80vw"
                              />
                            </div>
                            <p className="text-muted-foreground">{currentProject.details}</p>
                          </div>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl font-bold">{currentProject.title}</h3>
                  <p className="text-lg text-muted-foreground">{currentProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        View Live <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(1)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              size="sm"
              className={
                currentIndex === i ? "bg-primary text-primary-foreground" : ""
              }
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}