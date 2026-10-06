import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    ext: ".js",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    ext: ".java",
    title: "Backend",
    skills: ["Java", "Spring Boot", "REST API", "JSON / XML"],
  },
  {
    ext: ".sh",
    title: "Tools & Database",
    skills: ["Git", "GitHub", "MySQL", "SQL", "VS Code", "Eclipse"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">~/skills</p>
          <h2 className="section-title">What I work with</h2>
        </Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 120}
              className="skill-card"
            >
              <div className="skill-card-head">
                <span className="ext">{group.ext}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="chip-row">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
