import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal direction="up">
          <p className="eyebrow">~/about</p>
          <h2 className="section-title">A quick introduction</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal direction="left" className="about-text">
            <p>
              I'm an ambitious B.Tech Computer Science Engineering graduate
              (2026) with a unique academic foundation that also includes a
              diploma in Electrical Engineering. That mix taught me to think
              in systems before I ever wrote a line of code.
            </p>
            <p>
              I'm well versed in Core Java and OOP concepts, and comfortable
              across the modern frontend stack — React, HTML, CSS, JavaScript
              and Bootstrap. On the backend, I work with Java, Spring Boot and
              REST APIs to build applications that hold together end to end,
              not just look good on the surface.
            </p>
            <p>
              I'm a collaborative team player with a strong aptitude for
              quick learning and clear communication, and I enjoy taking on
              new challenges in the tech field. Off-screen, you'll usually
              find me playing cricket or planning the next trip.
            </p>
          </Reveal>

          <Reveal direction="right" delay={150} className="facts">
            <p className="facts-title">quick_facts.json</p>
            <div className="fact-row">
              <span className="fact-key">degree</span>
              <span className="fact-val">B.Tech, CSE (2026)</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">college</span>
              <span className="fact-val">GWCET, Nagpur</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">university</span>
              <span className="fact-val">DBATU, Lonere</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">focus</span>
              <span className="fact-val">Fullstack Development</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">interests</span>
              <span className="fact-val">Cricket, Travelling</span>
            </div>
            <div className="fact-row">
              <span className="fact-key">languages</span>
              <span className="fact-val">Marathi, Hindi, English</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
