import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import Skills from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <AboutSection />
      
      <ProjectsSection />
      <Skills />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
