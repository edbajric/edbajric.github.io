const skillCategories = [
  {
    title: "Programming & AI",
    skills: ["Python", "C/C++", "JavaScript", "TypeScript", "Swift", "Java", "TensorFlow", "OpenCV", "MediaPipe"]
  },
  {
    title: "Robotics & IoT",
    skills: ["ROS2", "IsaacSim", "MQTT", "Raspberry Pi", "Arduino", "ESP32", "Node-RED", "Sensors/Actuators"]
  },
  {
    title: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST APIs", "JSON"]
  },
  {
    title: "Mobile Development",
    skills: ["Swift", "SwiftUI", "Xcode", "Firebase", "Mobile Widgets"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Agile/Scrum", "Linux/Unix", "VS Code", "Figma", "Canva", "LaTeX"]
  },
  {
    title: "Machine Learning",
    skills: ["Data Engineering", "Feature Engineering", "Random Forest", "Gradient Boosting", "Cross-Validation", "Model Interpretability"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#435E66] px-6 py-24 md:px-12 md:py-32 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">
            Core Competencies
          </p>
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-serif font-light text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-[#556B73]/50 text-white rounded-md border border-[#7AA8D4]/30 hover:border-[#7AA8D4]/50 transition-colors"
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
