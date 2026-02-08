"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
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
      {/* Base Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img-0064.jpeg"
          alt="Portrait by the ocean"
          fill
          className="object-cover object-center"
        />
        {/* Bluish overlay for base image */}
        <div className="absolute inset-0 bg-[#435E66]/40 mix-blend-soft-light"></div>
      </div>

      {/* Centered Big Text Overlay */}
      <div className="absolute inset-0 z-10 flex justify-center px-6 pt-17">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-normal leading-none tracking-normal text-white drop-shadow-2xl whitespace-nowrap uppercase" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            HI, <span className="italic normal-case">I'm</span> EDINA <span className="text-[#87AED6]"></span>
          </h1>
        </div>
      </div>

      {/* Image Cut Overlay on Top */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src="/images/img-0064-cut.png"
          alt="Overlay"
          fill
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Curved Arrow Annotations */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        
        {/* Top Left Arrow - Computer Science student */}
        <div className={`absolute top-[40%] left-[30%] md:left-[23%] transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-20 translate-y-10 opacity-0"
          }`}>
          <p className="text-xs md:text-sm text-white uppercase tracking-wide absolute -top-7 -left-20 whitespace-nowrap" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Computer Science student
          </p>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <g transform="rotate(-20, 50, 50)">
            <path d="M15 20C35 25 45 40 40 50C35 60 25 55 28 45C32 35 55 40 82 80" 
                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M68 78L84 82L88 66" 
                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
          
        </div>

        {/* Top Right Arrow - Focused on AI & ML */}
        <div className={`absolute top-[48%] right-[10%] md:right-[28%] text-right transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-20 translate-y-10 opacity-0"
          }`}>
          <p className="text-xs md:text-sm text-white mt-[-10px] uppercase tracking-wide absolute -top-3 -right-20 whitespace-nowrap" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Focused on AI & ML
          </p>
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" style={{ transform: "scaleX(-1)" }}>
           <g transform="rotate(-100, 50, 50)">
            <path d="M85 20C65 25 55 40 60 50C65 60 75 55 72 45C68 35 45 40 18 80" 
                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32 78L16 82L12 66" 
                  stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
           </g>
          </svg>
         
          
        </div>

        {/* Bottom Left Arrow - Web / app development */}
        <div className={`absolute bottom-[22%] left-[8%] md:left-[22%] transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-20 -translate-y-10 opacity-0"
          }`}>
           
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <g transform="rotate(20, 50, 50)">
              <path d="M15 75C30 75 56 70 75 25" 
                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M62 28L75 25L80 38" 
                    stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
         <p className="text-xs md:text-sm text-white uppercase tracking-wide whitespace-nowrap absolute  -left-20" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
            Web & app development
          </p>
        </div>
      </div>

      {/* Content Below - Outside Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-24 py-12">
        <div
          className={`max-w-2xl ml-auto transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          
          <div
            className="flex flex-wrap gap-4 justify-end"
            style={{ fontFamily: "var(--font-indie-flower)" }}
          >
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
      <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-[#A0BBCE]" />
      </div>
    </section>
  )
}
