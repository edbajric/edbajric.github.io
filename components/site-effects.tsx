"use client"

import { useEffect } from "react"

export function SiteEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches

    const body = document.body
    const navProgress = document.getElementById("nav-progress")
    const dot = document.getElementById("cursor-dot")
    const ring = document.getElementById("cursor-ring")
    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement | null

    const cleanup: Array<() => void> = []

    const scrollHandler = () => {
      if (!navProgress) {
        return
      }

      const scrollMax = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollMax > 0 ? (window.scrollY / scrollMax) * 100 : 0
      navProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`
    }

    window.addEventListener("scroll", scrollHandler, { passive: true })
    cleanup.push(() => window.removeEventListener("scroll", scrollHandler))
    scrollHandler()

    if (!hasCoarsePointer && !reducedMotion && dot && ring) {
      body.classList.add("cursor-enhanced")

      let mouseX = window.innerWidth / 2
      let mouseY = window.innerHeight / 2
      let ringX = mouseX
      let ringY = mouseY
      let rafId = 0

      const onMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX
        mouseY = event.clientY
        dot.style.left = `${mouseX}px`
        dot.style.top = `${mouseY}px`
      }

      const onHoverStart = () => body.classList.add("hovering")
      const onHoverEnd = () => body.classList.remove("hovering")

      const hoverTargets = document.querySelectorAll<HTMLElement>(
        "a, button, .fx-hover-target, .project-tilt-card, .skill-chip"
      )

      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", onHoverStart)
        el.addEventListener("mouseleave", onHoverEnd)
      })

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.16
        ringY += (mouseY - ringY) * 0.16
        ring.style.left = `${ringX}px`
        ring.style.top = `${ringY}px`
        rafId = window.requestAnimationFrame(animateRing)
      }

      animateRing()
      cleanup.push(() => {
        window.cancelAnimationFrame(rafId)
        window.removeEventListener("mousemove", onMouseMove)
        hoverTargets.forEach((el) => {
          el.removeEventListener("mouseenter", onHoverStart)
          el.removeEventListener("mouseleave", onHoverEnd)
        })
        body.classList.remove("hovering")
        body.classList.remove("cursor-enhanced")
      })

      window.addEventListener("mousemove", onMouseMove, { passive: true })
    }

    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (revealElements.length && !reducedMotion) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible")
              revealObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.16 }
      )

      revealElements.forEach((el) => revealObserver.observe(el))
      cleanup.push(() => revealObserver.disconnect())
    } else {
      revealElements.forEach((el) => el.classList.add("is-visible"))
    }

    const skillGroups = document.querySelectorAll<HTMLElement>("[data-skill-group]")
    if (skillGroups.length && !reducedMotion) {
      const chipObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return
            }

            const chips = entry.target.querySelectorAll<HTMLElement>("[data-skill-chip]")
            chips.forEach((chip, index) => {
              window.setTimeout(() => {
                chip.classList.add("popped")
              }, index * 50)
            })

            chipObserver.unobserve(entry.target)
          })
        },
        { threshold: 0.2 }
      )

      skillGroups.forEach((group) => chipObserver.observe(group))
      cleanup.push(() => chipObserver.disconnect())
    } else {
      document.querySelectorAll<HTMLElement>("[data-skill-chip]").forEach((chip) => chip.classList.add("popped"))
    }

    const timeline = document.querySelector<HTMLElement>("[data-timeline]")
    if (timeline && !reducedMotion) {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) {
            return
          }

          timeline.classList.add("animated")
          const items = timeline.querySelectorAll<HTMLElement>("[data-timeline-item]")
          items.forEach((item, index) => {
            window.setTimeout(() => {
              item.classList.add("visible")
            }, 260 + index * 180)
          })

          timelineObserver.unobserve(timeline)
        },
        { threshold: 0.2 }
      )

      timelineObserver.observe(timeline)
      cleanup.push(() => timelineObserver.disconnect())
    } else if (timeline) {
      timeline.classList.add("animated")
      timeline.querySelectorAll<HTMLElement>("[data-timeline-item]").forEach((item) => item.classList.add("visible"))
    }

    const tiltCards = document.querySelectorAll<HTMLElement>("[data-tilt]")
    if (tiltCards.length && !reducedMotion && !hasCoarsePointer) {
      const onMove = (card: HTMLElement, event: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        card.style.transform = `perspective(720px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateZ(4px)`
      }

      tiltCards.forEach((card) => {
        const moveHandler = (event: MouseEvent) => onMove(card, event)
        const leaveHandler = () => {
          card.style.transform = ""
        }

        card.addEventListener("mousemove", moveHandler)
        card.addEventListener("mouseleave", leaveHandler)

        cleanup.push(() => {
          card.removeEventListener("mousemove", moveHandler)
          card.removeEventListener("mouseleave", leaveHandler)
        })
      })
    }

    if (canvas && !reducedMotion) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        type Particle = {
          x: number
          y: number
          vx: number
          vy: number
          radius: number
          pulse: number
          alpha: number
        }

        let width = 0
        let height = 0
        let animationId = 0

        const particles: Particle[] = Array.from({ length: 70 }, () => ({
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 0,
          pulse: 0,
          alpha: 0,
        }))

        const resetParticle = (particle: Particle) => {
          particle.x = Math.random() * width
          particle.y = Math.random() * height
          particle.vx = (Math.random() - 0.5) * 0.32
          particle.vy = (Math.random() - 0.5) * 0.32
          particle.radius = Math.random() * 1.8 + 0.5
          particle.pulse = Math.random() * Math.PI * 2
          particle.alpha = Math.random() * 0.45 + 0.08
        }

        const resizeCanvas = () => {
          width = canvas.width = window.innerWidth
          height = canvas.height = window.innerHeight
          particles.forEach((particle) => resetParticle(particle))
        }

        const drawConnections = () => {
          for (let i = 0; i < particles.length; i += 1) {
            for (let j = i + 1; j < particles.length; j += 1) {
              const dx = particles[i].x - particles[j].x
              const dy = particles[i].y - particles[j].y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 130) {
                ctx.beginPath()
                ctx.moveTo(particles[i].x, particles[i].y)
                ctx.lineTo(particles[j].x, particles[j].y)
                ctx.strokeStyle = `rgba(111, 162, 212, ${0.06 * (1 - distance / 130)})`
                ctx.lineWidth = 0.6
                ctx.stroke()
              }
            }
          }
        }

        const animateParticles = () => {
          ctx.clearRect(0, 0, width, height)

          particles.forEach((particle) => {
            particle.x += particle.vx
            particle.y += particle.vy
            particle.pulse += 0.015

            if (particle.x < 0 || particle.x > width || particle.y < 0 || particle.y > height) {
              resetParticle(particle)
            }

            const alpha = particle.alpha * (0.55 + 0.45 * Math.sin(particle.pulse))
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(111, 162, 212, ${alpha})`
            ctx.fill()
          })

          drawConnections()
          animationId = window.requestAnimationFrame(animateParticles)
        }

        resizeCanvas()
        animateParticles()

        window.addEventListener("resize", resizeCanvas)
        cleanup.push(() => {
          window.cancelAnimationFrame(animationId)
          window.removeEventListener("resize", resizeCanvas)
        })
      }
    }

    return () => {
      cleanup.forEach((fn) => fn())
    }
  }, [])

  return (
    <>
      <canvas id="particles-canvas" aria-hidden className="site-particles" />
      <div id="cursor-dot" aria-hidden className="cursor-dot" />
      <div id="cursor-ring" aria-hidden className="cursor-ring" />
      <div id="nav-progress" aria-hidden className="nav-progress" />
    </>
  )
}
