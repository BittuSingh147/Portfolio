// app/page.tsx
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import HeroSection from "@/components/hero-section"
import SectionTransition from "@/components/SectionTransition"
import CarGame from "@/components/CarGame"

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
      <SectionTransition>
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Take a Break and Play!</h2>
            <CarGame />
          </div>
        </section>
      </SectionTransition>
    </main>
  )
}