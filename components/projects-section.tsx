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
    title: "EndowherAI – Endometriosis & PCOS Symptom Tracking Platform",
    description:
      "Currently working on research-oriented web app for women with endometriosis and PCOS to track cycles, multidimensional symptoms, and remedies over time. Designing an end-to-end ML pipeline on a self-collected, anonymized survey dataset to find patterns in non-pharmacological remedies.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "Machine Learning",
      "Random Forest",
      "XGBoost",
      "JWS-Auth",
    ],
    github: "https://github.com/edbajric/EndowherAI",
  },
  {
    title: "ROMER Research Internship Projects",
    description:
      "Researched recent LLM and VLA models for robotic perception and automated camera calibration with 3D point cloud generation. Integrated Intel RealSense with ROS2 for real-time object recognition in domestic service robot development.",
    tags: ["Python", "ROS2", "Computer Vision", "Intel RealSense", "Docker"],
    github: "https://github.com/edbajric/ROMER2025",
  },
  {
    title: "IUS Mahala – Student Communication Platform",
    description:
      "Developed a full-stack student social platform using Next.js (pages & API routes) and Supabase (PostgreSQL) with normalized database models, CRUD APIs, and secure authentication. Implemented password hashing, JWT/session-based login, and centralized error handling.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Full-Stack"],
    github: "https://github.com/edbajric/IUSMahala",
  },
  {
    title: "edbajric.github.io Portfolio",
    description:
      "This portfolio site was designed and built by me in Next.js with a custom component system, motion-based UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    github: "https://github.com/edbajric/edbajric.github.io",
  },
  {
    title: "Hand Gesture Controlled Robot",
    description:
      "Engineered a real-time computer vision system for hand gesture recognition using OpenCV and MediaPipe. Integrated an Arduino-based embedded controller with custom serial communication to reduce end-to-end latency.",
    tags: ["Python", "C++", "OpenCV", "MediaPipe", "Arduino", "Computer Vision"],
    github: "https://github.com/edbajric/HandGestureControlRobot",
  },
  {
    title: "Dinero",
    description:
      "Built a full-stack web application focused on modern UI/UX, authentication, and data-driven workflows as a restaurant reservation system.",
    tags: ["React.js", "Next.js", "Node.js", "JavaScript", "MySQL"],
    github: "https://github.com/Adnan-M123/Dinero",
  },
  
]

/* ---------------- Card ---------------- */

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      data-reveal="scale"
      data-tilt
      className={`project-tilt-card fx-hover-target group relative overflow-hidden rounded-lg border border-[#6FA2D4]/30 bg-[#56727B]/10 backdrop-blur-sm p-6
        transition-all duration-500 ease-out
        hover:border-[#6FA2D4]/60 hover:bg-[#56727B]/20
        translate-y-0 opacity-100
      `}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#30464C]/0 to-[#30464C]/10 opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="mb-3 text-2xl font-light text-white" style={{ fontFamily: "var(--font-indie-flower)" }}>
          {project.title}
        </h3>

        <p className="mb-4 text-sm font-sans leading-relaxed text-[#C7D1D6]">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#435E66]/60 px-3 py-1 text-xs text-[#C7D1D6]"
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
  return (
    <section
      id="projects"
      className="relative px-6 py-24 md:px-12 md:py-32 lg:px-24 overflow-hidden"
      style={{
        fontFamily: "var(--font-indie-flower)",
        backgroundImage: "url('/images/water.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-[#435E66]/70" />
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-10" data-reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]">Selected Work</p>
          <h2
            className="text-4xl font-light text-white md:text-5xl"
            style={{ fontFamily: "var(--font-indie-flower), cursive" }}
          >
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}