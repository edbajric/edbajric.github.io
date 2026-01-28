"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleViewWork = (e) => {
    e.preventDefault()
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/images/img-0064.jpeg"
          alt="Portrait by the ocean"
          className="h-full w-full object-cover object-center"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#435E66]/80 via-[#435E66]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#435E66]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-24">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#A0BBCE]">
            Hello, it's
          </p>
          <h1 className="mb-6 font-serif text-5xl font-light leading-tight text-white md:text-7xl lg:text-8xl">
            Edina
            <br />
            <span className="text-[#87AED6]">Bajric</span>
          </h1>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-[#A4ADAE]">
            Computer science student focused on AI, robotics, and full-stack development,
building thoughtful systems that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={handleViewWork} className="inline-flex items-center justify-center rounded-md border border-[#6FA2D4]/40 bg-transparent px-4 py-2 text-white hover:bg-[#6FA2D4]/20 hover:text-white transition-colors">
              View Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </button>
            <Button
              variant="outline"
              className="border-[#6FA2D4]/40 bg-transparent text-white hover:bg-[#6FA2D4]/20 hover:text-white"
              asChild
            >
              <a href="https://github.com/edbajric" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-[#6FA2D4]/40 bg-transparent text-white hover:bg-[#6FA2D4]/20 hover:text-white"
              asChild
            >
              <a href="mailto:ebajric@student.ius.edu.ba" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-[#A0BBCE]" />
      </div>
    </section>
  )
}
