import Reveal from "./Reveal";

const PROJECTS = [
  {
    index: "01",
    title: "Employee Management System",
    desc: "A fullstack app built during my internship at The Kiran Academy to manage employee records, roles and attendance — Java & Spring Boot backend with REST APIs, connected to a MySQL database.",
    tags: ["Java", "Spring Boot", "REST API", "MySQL"],
    github: "https://github.com/Yashkumar20022",
    live: "",
  },
  {
    index: "02",
    title: "Job Board Web App",
    desc: "A responsive job listing platform built during my frontend internship at PSK Technology, with search, filters and a clean job-detail view.",
    tags: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/Yashkumar20022",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">~/projects</p>
          <h2 className="section-title">Things I've built</h2>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 150}
              className="project-card"
            >
              <span className="project-index">{project.index}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View code →
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live demo →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
