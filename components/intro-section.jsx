"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleContactScroll = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="intro" ref={sectionRef} className="relative px-6 py-16 md:py-20 overflow-hidden isolate" style={{ backgroundImage: "url('/images/water.jpeg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-[#435E66] z-0"></div>
      <div className={`mx-auto max-w-7xl text-[#E8EEF2] transition-all duration-1000 relative z-10 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        
        <div className="grid grid-cols-1 md:grid-cols-12 items-start">
          
          {/* 1. SVG NAME */}
          <div className="col-span-full md:col-start-3 md:col-span-4 flex justify-start z-10">
             <Image src="/HiImEdina.svg" alt="Hi I'm Edina" width={180} height={30} className="h-auto w-36 md:w-44 brightness-0 invert" priority />
          </div>

          {/* 2. POLAROID */}
          <div className="hidden lg:block md:col-start-10 md:row-start-1 md:row-span-2 relative z-20 rotate-3 self-center">
            <div className="bg-[#F5F7FA] p-2 pb-6 shadow-xl w-32 md:w-40">
               <div className="relative aspect-[5/6] w-full">
                 <Image src="/images/IMG_0232.png" alt="Polaroid" fill className="object-cover" />
               </div>
               <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-[#6FA2D4]/40" />
            </div>
          </div>

          {/* 3. TITLE */}
          <div className="col-span-full md:col-start-1 md:col-span-12 text-center md:row-start-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin uppercase leading-tight tracking-wide" style={{ fontFamily: "var(--font-instrument-serif), serif" }}>
                Computer science student,<br />focused on AI and ML
            </h2>
          </div>

          {/* 4. CONTENT ROW */}
          {/* Left Side: Updated Font to match Reference */}
          <div className="col-span-full md:col-span-6 flex flex-col items-end text-right pt-8 md:pr-10 md:row-start-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D7E4EC] md:text-sm max-w-[300px] font-sans font-light leading-relaxed">
              I SEE LEARNING AS A RESPONSIBILITY TO CREATE MEANINGFUL SOLUTIONS THAT HELP PEOPLE AND COMMUNITIES.
            </p>

            <div className="w-full flex justify-end pr-12 mt-12">
              <div className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-[360px] shadow-2xl">
                <Image src="/images/IMG_0222.png" alt="Profile image" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-full md:col-start-7 md:col-span-6 flex flex-col items-start text-left pt-8 md:pl-10 md:row-start-3">
            <p className="text-sm md:text-base max-w-[300px]" style={{ fontFamily: "var(--font-indie-flower)" }}>
              I'm interested in building ML models for practical problems, and crafting full-stack apps that turn complex ideas into useful products.
              <br /><br />
              Currently exploring AI, machine learning, and software engineering with a focus on work that is genuinely useful.
            </p>

            <a
              href="#contact"
              onClick={handleContactScroll}
              className="mt-10 inline-flex items-center justify-center rounded-md border border-[#6FA2D4]/40 bg-transparent px-25 py-2 text-white transition-colors hover:bg-[#6FA2D4]/20 hover:text-white"
              style={{ fontFamily: "var(--font-indie-flower)" }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>

          </div>
        </div>

        


        {/* BROKEN TEXT MARQUEE - Full Screen Width */}
        <div className="mt-22 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            
            {/* Loop 10 times to ensure zero gaps on ultra-wide screens */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="relative px-4 md:px-8 flex-shrink-0 cursor-default select-none">
                
                {/* Top Half - Shifted Right */}
                <h3 
                  className="text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter [clip-path:inset(0_0_50%_0)] translate-x-0.5 md:translate-x-1" 
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  MY PROJECTS
                </h3>
                
                {/* Bottom Half - Shifted Left */}
                <h3 
                  className="absolute top-0 left-0 text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter [clip-path:inset(50%_0_0_0)] -translate-x-1 md:-translate-x-2 px-4 md:px-8" 
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  MY PROJECTS
                </h3>
              </div>
            ))}

            {/* Exact Duplicate for the Infinite Loop */}
            {[...Array(10)].map((_, i) => (
              <div key={`dup-${i}`} className="relative px-4 md:px-8 flex-shrink-0 cursor-default select-none" aria-hidden="true">
                <h3 
                  className="text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter [clip-path:inset(0_0_50%_0)] translate-x-0.5 md:translate-x-1" 
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  MY PROJECTS
                </h3>
                <h3 
                  className="absolute top-0 left-0 text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter [clip-path:inset(50%_0_0_0)] -translate-x-1 md:-translate-x-2 px-4 md:px-8" 
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  MY PROJECTS
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}