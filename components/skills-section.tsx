"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "Data Engineering", "Feature Engineering", "Random Forest", "Gradient Boosting", "Cross-Validation", "Model Interpretability"]
  },
  {
    title: "Web Development",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MySQL", "REST APIs", "JSON", "Java"]
  },
  {
    title: "Mobile Development",
    skills: ["Swift", "SwiftUI", "Xcode", "Firebase"]
  },
  {
    title: "Robotics & IoT",
    skills: ["C/C++", "ROS2", "IsaacSim", "MQTT", "Raspberry Pi", "Arduino", "ESP32", "Node-RED", "Sensors/Actuators"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Agile/Scrum", "VS Code", "Figma", "Canva", "LaTeX"]
  }
]

export default function Skills() {
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#435E66] font-sans px-6 pt-12 pb-8 md:px-12 md:pt-16 md:pb-10 lg:px-24"
      
    >
      <div className={`mx-auto max-w-6xl transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}>
        {/* BROKEN TEXT MARQUEE - Full Screen Width */}
        <div className="mt-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Loop 10 times to ensure zero gaps on ultra-wide screens */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="relative px-4 md:px-8 flex-shrink-0 cursor-default select-none">
                {/* Top Half - Shifted Right */}
                <h3
                  className="text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter text-white [clip-path:inset(0_0_50%_0)] translate-x-0.5 md:translate-x-1"
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  SKILLS
                </h3>

                {/* Bottom Half - Shifted Left */}
                <h3
                  className="absolute top-0 left-0 text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter text-white [clip-path:inset(50%_0_0_0)] -translate-x-1 md:-translate-x-2 px-4 md:px-8"
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  SKILLS
                </h3>
              </div>
            ))}

            {/* Exact Duplicate for the Infinite Loop */}
            {[...Array(10)].map((_, i) => (
              <div key={`dup-${i}`} className="relative px-4 md:px-8 flex-shrink-0 cursor-default select-none" aria-hidden="true">
                <h3
                  className="text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter text-white [clip-path:inset(0_0_50%_0)] translate-x-0.5 md:translate-x-1"
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  SKILLS
                </h3>
                <h3
                  className="absolute top-0 left-0 text-5xl md:text-8xl lg:text-9xl font-thin italic uppercase tracking-tighter text-white [clip-path:inset(50%_0_0_0)] -translate-x-1 md:-translate-x-2 px-4 md:px-8"
                  style={{ fontFamily: "var(--font-instrument-serif), serif" }}
                >
                  SKILLS
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-30 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3
                className="text-2xl font-light text-white"
                style={{ fontFamily: "var(--font-indie-flower)" }}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-full bg-[#617b80]/30 px-3 py-1 text-xs text-[#E8F0F5]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
