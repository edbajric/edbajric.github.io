"use client"

import { useEffect, useRef, useState } from "react"
import { Github } from "lucide-react"

/* ---------------- Types ---------------- */

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
}

interface ProjectCardProps {
  project: Project
  isVisible: boolean
  delay: number
}

/* ---------------- Data ---------------- */

const projects: Project[] = [
  {
    title: "Machine Learning–Based Fitness Supplement Recommendation System",
    description:
      "Built a data-driven ML recommendation system in Python that predicts optimal fitness supplements based on user profiles using Random Forest and Gradient Boosting models. Implemented feature engineering, one-hot encoding, and 5-fold cross-validation, achieving up to 92% explained variance.",
    tags: ["Python", "Machine Learning", "Random Forest", "Gradient Boosting", "Data Engineering"],
    github: "https://github.com/edbajric/SupplementRecsML",
  },
  {
    title: "ROMER Research Internship Projects",
    description:
      "Researched recent LLM and VLA models for robotic perception and automated camera calibration with 3D point cloud generation. Integrated Intel RealSense with ROS2 for real-time object recognition in domestic service robot development.",
    tags: ["Python", "ROS2", "Computer Vision", "Intel RealSense", "Docker"],
    github: "https://github.com/edbajric/ROMER2025",
  },
  {
    title: "edbajric.github.io Portfolio",
    description:
      "Designed and built a personal portfolio site in Next.js with a custom component system, motion-based UI, and responsive layouts tailored for showcasing projects and experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    github: "https://github.com/edbajric/edbajric.github.io",
  },
  {
    title: "Hand Gesture Controlled Robot",
    description:
      "Engineered a real-time computer vision system for hand gesture recognition using OpenCV and MediaPipe. Integrated an Arduino-based embedded controller with custom serial communication to reduce end-to-end latency.",
    tags: ["Python", "C++", "OpenCV", "MediaPipe", "Arduino", "Computer Vision"],
    github: "https://github.com/edbajric/MPProject",
  },
  {
    title: "Dinero",
    description:
      "Built a full-stack web application focused on modern UI/UX, authentication, and data-driven workflows for personal finance management.",
    tags: ["React.js", "Next.js", "Node.js", "JavaScript", "MySQL"],
    github: "https://github.com/Adnan-M123/Dinero",
  },
  {
    title: "IUS Mahala – Student Communication Platform",
    description:
      "Built a React.js and Node.js social platform streamlining academic resource sharing and faculty-based discussion groups. Designed an intuitive, responsive interface that facilitated peer-to-peer learning and improved information exchange across the university.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "MySQL"],
    github: "https://github.com/edbajric/ius-mahala",
  },
]

/* ---------------- Card ---------------- */

function ProjectCard({ project, isVisible, delay }: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-[#6FA2D4]/30 bg-[#56727B]/10 backdrop-blur-sm p-6
        transition-all duration-1000 ease-out
        hover:border-[#6FA2D4]/60 hover:bg-[#56727B]/20
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#30464C]/0 to-[#30464C]/10 opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-3 font-serif text-2xl font-light text-white">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-[#A4ADAE]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#435E66]/60 px-3 py-1 text-xs text-[#A0BBCE]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-[#7AA8D4] transition-colors duration-300 hover:text-[#8CBECA]"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Section ---------------- */

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative px-6 py-24 md:px-12 md:py-32 lg:px-24 overflow-hidden"
      style={{
        fontFamily: "var(--font-indie-flower)",
        backgroundImage: "url('/images/water.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-[#435E66]/70" />
      <div className="mx-auto max-w-6xl relative z-10">
      

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}