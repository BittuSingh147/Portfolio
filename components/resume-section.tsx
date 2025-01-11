"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  BookOpen,
  Calendar,
  Building,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Intaskr",
    period: "2024 - Present",
    description: "Development of SASS applications using Next.js and Node.js",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    highlights: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Bluethink.inc",
    period: "2023 - 2024",
    description: "Developed scalable web applications and microservices",
    skills: ["React", "JAVA", "SpringBoot", "MongoDB"],
    highlights: [
      "Built real-time analytics dashboard",
      "Reduced server costs by 30%",
      "Mentored junior developers",
    ],
  },
];

const education = [
  {
    degree: "Bachler of Computer Science",
    school: "Chandigarh University",
    year: "2023",
    gpa: "3.8/4.0",
    courses: ["Data Structures", "Web Development", "Database Systems"],
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  Backend: ["Node.js", "Python", "Java", "Express", "GraphQL"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
  Tools: ["VS Code", "Postman", "Jira", "Figma", "Jenkins"],
};

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience");
  const containerRef = useRef(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.section
      ref={containerRef}
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-secondary/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Professional Journey
            </h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              A glimpse into my professional experience and expertise
            </p>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
            <Button asChild variant="default" className="w-full sm:w-auto gap-2">
              <a
                href="https://drive.google.com/file/d/1zSXW_W-Ga1QyfH86xOcVEbHyS6gae9bC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {["experience", "education", "skills"].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 sm:flex-none capitalize text-sm sm:text-base"
                >
                  {tab === "experience" && <Building className="w-4 h-4 mr-2 hidden sm:inline" />}
                  {tab === "education" && <GraduationCap className="w-4 h-4 mr-2 hidden sm:inline" />}
                  {tab === "skills" && <BookOpen className="w-4 h-4 mr-2 hidden sm:inline" />}
                  {tab}
                </Button>
              ))}
            </div>

            {/* Content Card */}
            <div className="bg-card rounded-lg p-4 sm:p-6 shadow-lg">
              {activeTab === "experience" && (
                <motion.div {...fadeInUp} className="space-y-6 sm:space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`${index !== 0 ? "pt-6 sm:pt-8 border-t" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 text-sm"
                        >
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm sm:text-base">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div {...fadeInUp}>
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`${index !== 0 ? "pt-6 sm:pt-8 border-t" : ""}`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">{edu.school}</p>
                        </div>
                        <Badge variant="secondary">{edu.year}</Badge>
                      </div>
                      <p className="mt-2 text-sm sm:text-base">GPA: {edu.gpa}</p>
                      <div className="mt-4">
                        <p className="font-medium mb-2 text-sm sm:text-base">Key Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <Badge key={course} variant="outline" className="text-sm">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  {...fadeInUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-base sm:text-lg font-semibold mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="bg-card rounded-lg p-4 sm:p-6 shadow-lg h-fit">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Years of Experience
                </p>
                <p className="text-xl sm:text-2xl font-bold">1+</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
                <p className="text-xl sm:text-2xl font-bold">20+</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Technologies</p>
                <p className="text-xl sm:text-2xl font-bold">20+</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
                <p className="text-xl sm:text-2xl font-bold">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
