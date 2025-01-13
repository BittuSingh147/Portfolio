// app/page.tsx
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import HeroSection from "@/components/hero-section"
import SectionTransition from "@/components/SectionTransition"


export default function HomePage() {
  return (
    <main className="relative pt-16">
      <HeroSection/>
      <SectionTransition>
      <section id="about">
        <AboutSection />
      </section>
      </SectionTransition>
      <SectionTransition>
      <section id="skills">
        <SkillsSection />
      </section>
      </SectionTransition>
      <SectionTransition>
      <section id="projects">
        <ProjectsSection />
      </section>
      </SectionTransition>
      <SectionTransition>
      <section id="resume">
        <ResumeSection />
      </section>
      </SectionTransition>
   
    </main>
  )
}