"use client"

import { useEffect, useRef, useState } from "react"

export function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#435E66] px-6 py-24 md:px-12 md:py-32 lg:px-24 lg:py-40"
    >
      {/* Subtle water-inspired gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#56727B]/20 via-transparent to-[#435E66]/30" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-8 font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            I see learning as a{" "}
            <span className="text-[#7AA8D4]">responsibility</span> to create 
            meaningful solutions.
          </h2>
        </div>

        <div
          className={`transition-all delay-200 duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="h-px w-24 bg-[#6FA2D4]/50 mb-8" />
          <p className="text-lg leading-relaxed text-[#A4ADAE] md:text-xl">
            I approach every project with the mindset that great work comes from understanding real needs and applying technical skill thoughtfully. Whether it's building ML models for practical problems, developing robotics systems, or creating full-stack applications—I focus on solutions that create meaningful impact.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#A4ADAE] md:text-xl">
            Currently exploring the intersection of artificial intelligence, computer vision, robotics, and software development—guided by the philosophy that the best work is both technically excellent and genuinely useful.
          </p>
        </div>
      </div>
    </section>
  )
}
