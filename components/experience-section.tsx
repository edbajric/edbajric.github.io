"use client"

import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Research Intern – AI and Robotics",
    organization: "Center for Robotics and Artificial Intelligence (ROMER) at METU, Ankara",
    period: "Jul 2025 — Aug 2025",
    description:
      "Integrated computer vision and robotic perception systems for the BEKO domestic service robot project on ROS2.",
    highlights: [
      "Camera calibration & RealSense D455 integration with Franka Robot Arm",
      "Spatial object recognition & 3D reconstruction with Python",
      "Vision Language Models (VLA) research for robotic perception",
    ],
  }
];

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="relative bg-[#435E66] font-sans px-6 py-24 md:px-12 md:py-32 lg:px-24"
      
    >
      <div className={`mx-auto max-w-6xl transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}>
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">
            My Work
          </p>
          <h2
            className="text-4xl font-light text-white md:text-5xl"
            style={{ fontFamily: "var(--font-indie-flower), cursive" }}
          >
            Experience 
          </h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-[#7AA8D4]/30">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 bg-[#7AA8D4] rounded-full" />
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3
                    className="text-lg font-light text-white"
                    style={{ fontFamily: "var(--font-indie-flower), cursive" }}
                  >
                    {exp.title}{" "}
                    <span className="text-[#7AA8D4]">@ {exp.organization}</span>
                  </h3>
                  <span className="text-[#A0BBCE] text-sm" style={{ fontFamily: "var(--font-indie-flower), cursive" }}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#A4ADAE] leading-relaxed text-sm">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-[#A0BBCE] text-sm flex items-start gap-2"
                    >
                      <span className="text-[#7AA8D4] mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
