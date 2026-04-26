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

const leadershipActivities = [
  {
    role: "Project Lead -- EndowherAI",
    orgTag: "International University of Sarajevo",
    organization:
      "Graduation Project",
    period: "Feb 2026 -- Present",
    points: [
      "Leading a team of 4 through scoped milestones (MVP, data collection, deployment), providing concrete guidelines on tech choices, AI-assisted tools, and workflows to keep development productive and secure.",
      "Designed the product vision, brand, and system architecture (Next.js frontend, FastAPI backend, Supabase/PostgreSQL, ML services), and launched an anonymized survey to collect data for ML model training.",
    ],
  },
  {
    role: 'Founder & President, Robotics Club "FENSy Solutions"',
    orgTag: "International University of Sarajevo",
    period: "2024--2025",
    points: [
      "Founded a robotics club to foster peer-to-peer STEM education and project collaboration.",
      "Mentored members through the design and integration of the Hand Gesture Controlled Robot project.",
    ],
  },
];

const certificates = [
  {
    title: "Machine Learning A-Z: Hands-On Python & R in Data Science",
    issuer: "Udemy",
    issued: "Issued Mar 2026",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Artificial Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Reinforcement Learning",
      "Classification",
      "Regression Models",
      "Deep Learning",
      "k-means clustering",
      "Hierarchical Clustering",
      "Principal Component Analysis",
      "XGBoost",
      "Support Vector Machine (SVM)",
      "K-Nearest Neighbors (KNN)",
    ],
  },
  {
    title: "FastAPI - The Complete Course (Beginner + Advanced)",
    issuer: "Udemy",
    issued: "In progress",
  },
  {
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    issued: "In progress",
  },
  {
    title: "Large Language Model (LLM) Course",
    issuer: "Hugging Face",
    issued: "In progress",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-[#435E66] font-sans px-6 py-24 md:px-12 md:py-32 lg:px-24"
      
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#6FA2D4]" data-reveal>
            My Work
          </p>
          <h2
            className="text-4xl font-light text-white md:text-5xl"
            style={{ fontFamily: "var(--font-indie-flower), cursive" }}
            data-reveal
          >
            Experience 
          </h2>
        </div>
        
        <div className="timeline space-y-12" data-timeline>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative pl-8 border-l border-[#7AA8D4]/30" data-timeline-item>
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

        <div className="mt-20 space-y-16">
          <div data-reveal="left">
            <h3
              className="mb-8 text-2xl font-light text-white md:text-3xl"
              style={{ fontFamily: "var(--font-indie-flower), cursive" }}
            >
              Leadership & Activities
            </h3>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#7AA8D4]/30" />
              <div className="space-y-12">
                {leadershipActivities.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 bg-[#7AA8D4] rounded-full" />
                    <div className="space-y-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                        <h4 className="text-lg font-light text-white" style={{ fontFamily: "var(--font-indie-flower), cursive" }}>
                          {item.role}{" "}
                          {item.orgTag ? <span className="text-[#7AA8D4]">@ {item.orgTag}</span> : null}
                        </h4>
                        <span className="text-[#A0BBCE] text-sm" style={{ fontFamily: "var(--font-indie-flower), cursive" }}>
                          {item.period}
                        </span>
                      </div>
                      <p className="text-[#A4ADAE] leading-relaxed text-sm italic">{item.organization}</p>
                      <ul className="space-y-2">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-[#A0BBCE] text-sm flex items-start gap-2">
                            <span className="text-[#7AA8D4] mt-1">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal="right">
            <h3
              className="mb-8 text-2xl font-light text-white md:text-3xl"
              style={{ fontFamily: "var(--font-indie-flower), cursive" }}
            >
              Licenses & Certifications
            </h3>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#7AA8D4]/30" />
              <ul className="space-y-12">
                {certificates.map((certificate, index) => (
                  <li key={index} className="relative pl-8">
                    <span className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 bg-[#7AA8D4] rounded-full" />
                    <div className="space-y-2">
                      <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-indie-flower), cursive" }}>
                        {certificate.title}
                      </p>
                      <p className="text-[#7AA8D4] text-sm">{certificate.issuer}</p>
                      <p className="text-[#A4ADAE] text-sm">{certificate.issued}</p>

                      {certificate.skills ? (
                        <div className="pt-2">
                          <p className="mb-2 text-[#A4ADAE] text-xs uppercase tracking-[0.12em]">Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="rounded-full border border-[#7AA8D4]/40 bg-[#7AA8D4]/10 px-3 py-1 text-xs text-[#A0BBCE]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
