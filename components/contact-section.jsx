"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "ebajric@student.ius.edu.ba",
    href: "mailto:ebajric@student.ius.edu.ba",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/edbajric",
    href: "https://github.com/edbajric",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/edina-bajric",
    href: "https://linkedin.com/in/edina-bajric",
  },
]

export function ContactSection() {
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
      id="contact"
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
      <div className="absolute inset-0 bg-[#435E66]/85" />
      <div className="relative z-10">
      <div className="mx-auto max-w-4xl">
        <div
          className={`mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">
            Get In Touch
          </p>
          <h2 className="mb-6 font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            {"Connect via the "} <span className="text-[#7AA8D4]">links below</span>
          </h2>
          <p className="mx-auto max-w-xl text-[#A4ADAE]">
            {"I'm"} currently exploring opportunities in AI/ML research, robotics engineering, and full-stack development. I'm open to collaborations, research roles, and interesting projects.
          </p>
        </div>

        <div
          className={`flex flex-col items-center gap-6 transition-all delay-200 duration-1000 ease-out md:flex-row md:justify-center ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg border border-[#6FA2D4]/50 bg-transparent backdrop-blur-md px-6 py-4 font-serif transition-all hover:border-[#6FA2D4]/80 hover:bg-[#56727B]/20"
              >
                <Icon className="h-5 w-5 text-[#7AA8D4]" />
                <div>
                  <p className="text-xs text-[#A0BBCE]">{link.label}</p>
                  <p className="text-sm text-white">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#6FA2D4] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-24 border-t border-[#56727B]/50 pt-8 text-center transition-all delay-300 duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <p className="text-sm text-[#6B7573]">
          Designed & Built by Edina Bajric
        </p>
        <p className="mt-1 text-xs text-[#6B7573]/70">
          © 2026 All rights reserved
        </p>
      </div>
      </div>
    </section>
  )
}
