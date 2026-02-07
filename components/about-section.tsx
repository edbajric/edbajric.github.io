import { Brain, Eye, Bot, Code2 } from "lucide-react"

const focusAreas = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Building intelligent systems and data-driven models that solve real problems"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Developing perception algorithms for robotic systems and visual understanding"
  },
  {
    icon: Bot,
    title: "Robotics & IoT",
    description: "Creating human-robot interaction systems and embedded IoT solutions"
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile application development with focus on user experience"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#435E66] px-6 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#435E66]/20 via-transparent to-[#56727B]/30" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">
            Who I Am
          </p>
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          

          <div className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((area) => (
              <div 
                key={area.title}
                className="p-6 rounded-lg bg-[#56727B]/50 border border-[#7AA8D4]/30 hover:border-[#7AA8D4]/50 transition-colors"
              >
                <area.icon className="h-8 w-8 text-[#7AA8D4] mb-4" />
                <h3 className="font-serif font-light text-white mb-2">{area.title}</h3>
                <p className="text-sm text-[#A0BBCE]">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
