"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "About", href: "#intro" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#435E66]/90 backdrop-blur-md border-b border-[#435E66]/40"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6 md:px-9 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#FFF] font-light text-3xl hover:text-[#E6F1FF]"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)", fontFamily: "var(--font-indie-flower), cursive" }}
        >
          &lt; EDBAJRIC /&gt;
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="text-[#ECF7FA] hover:text-[#E6F1FF] transition-colors text-sm"
                style={{ fontFamily: "var(--font-indie-flower), cursive" }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E6F1FF]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#435E66]/95 backdrop-blur-md">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-[#E6F1FF] hover:text-[#9FC8F2] transition-colors text-lg"
                  style={{ fontFamily: "var(--font-indie-flower), cursive" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}