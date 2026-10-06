import Reveal from "./Reveal";

const EXPERIENCE = [
  {
    date: "Nov 2025 — Apr 2026",
    role: "Fullstack Java Development Intern",
    org: "The Kiran Academy, Nagpur",
    desc: "Built an Employee Management System, working across the stack with Java, Spring Boot and REST APIs on the backend and a React-based interface on the frontend.",
  },
  {
    date: "Internship",
    role: "Frontend Development Intern",
    org: "PSK Technology",
    desc: "Built a job board web application end to end — implementing responsive listing pages, filters and job-detail views in React and modern CSS.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">~/experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <Reveal
              key={item.role}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 150}
              className="timeline-item"
            >
              <span className="timeline-dot" />
              <p className="timeline-date">{item.date}</p>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-desc">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
