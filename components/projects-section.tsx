"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ExternalLink } from "lucide-react"

/* ---------------- Types ---------------- */

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  demo: string
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
      "Built a data-driven ML recommendation system in Python that predicts optimal fitness supplements based on user profile using Random Forest and Gradient Boosting models trained on real-world fitness data. Achieved 92% explained variance with model interpretability.",
    tags: ["Python", "Machine Learning", "Random Forest", "Gradient Boosting", "Data Engineering"],
    github: "#",
    demo: "#",
  },
  {
    title: "Hand Gesture Controlled Robot",
    description:
      "Engineered a real-time computer vision system with 90% accuracy for hand gesture recognition. Integrated Arduino-based embedded controller with custom serial communication, reducing end-to-end latency to 160ms for seamless human-robot interaction.",
    tags: ["Python", "C++", "OpenCV", "MediaPipe", "Arduino", "Computer Vision"],
    github: "#",
    demo: "#",
  },
  {
    title: "IoT-Based Real-Time Fire Detection & Monitoring",
    description:
      "Designed an end-to-end IoT architecture using Raspberry Pi and flame sensors for environment monitoring. Developed high-efficiency MQTT communication pipeline and web-based Node-RED dashboard for real-time data visualization.",
    tags: ["Raspberry Pi", "IoT", "MQTT", "Node-RED", "JSON", "Embedded Systems"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Restaurant Reservation System",
    description:
      "Developed a full-stack application with intelligent recommendations and real-time table availability. Implemented role-based access control and responsive UI/UX, improving usability and operational efficiency for users and management.",
    tags: ["React.js", "Next.js", "Node.js", "MySQL", "Full Stack"],
    github: "#",
    demo: "#",
  },
  {
    title: "iOS Social Gifting/Wishlist App",
    description:
      "Driving the development of a Swift/SwiftUI-based iOS app integrating social networking with personalized e-commerce functionalities. Implementing Firebase backend for scalability and secure data management in preparation for App Store deployment.",
    tags: ["Swift", "SwiftUI", "iOS", "Firebase", "Mobile Development"],
    github: "#",
    demo: "#",
  },
  {
    title: "IUS Mahala – Student Communication Platform",
    description:
      "Built a React.js and Node.js social platform streamlining academic resource sharing and faculty-based discussion groups. Designed an intuitive, responsive interface that facilitated peer-to-peer learning and improved information exchange across the university.",
    tags: ["React.js", "Node.js", "Full Stack", "Social Platform", "Education Tech"],
    github: "#",
    demo: "#",
  },
]

/* ---------------- Card ---------------- */

function ProjectCard({ project, isVisible, delay }: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-[#6FA2D4]/30 bg-[#56727B]/30 p-6
        transition-all duration-1000 ease-out
        hover:border-[#6FA2D4]/60 hover:bg-[#56727B]/50
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
      `}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#30464C]/0 to-[#30464C]/10 opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

      <div className="relative z-10">
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

        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-1 text-sm text-[#7AA8D4] transition-colors duration-300 hover:text-[#8CBECA]"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1 text-sm text-[#7AA8D4] transition-colors duration-300 hover:text-[#8CBECA]"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
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
      className="relative bg-[#435E66] px-6 py-24 md:px-12 md:py-32 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
            Projects
          </h2>
        </div>

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