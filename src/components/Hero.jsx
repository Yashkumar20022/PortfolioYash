export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow hero-anim d1">hello_world.js</p>
          <h1 className="hero-name hero-anim d2">
            <span className="text-gradient">Yashkumar</span>
            <br />
            <span className="text-gradient">Baghele</span>
            <span className="cursor" />
          </h1>
          <span className="hero-role hero-anim d3">Fullstack Developer</span>

          <p className="hero-bio hero-anim d4">
            B.Tech CSE fresher who builds clean, responsive interfaces with React
            and ships them end-to-end with Java &amp; Spring Boot on the backend.
          </p>

          <div className="hero-meta hero-anim d5">
            <span>📍 Nagpur, Maharashtra</span>
            <span>🎓 B.Tech CSE, 2026</span>
          </div>

          <div className="hero-actions hero-anim d6">
            <a href="/resume.pdf" download className="btn btn-primary">
              ↓ Download Resume
            </a>
            <a
              href="https://github.com/Yashkumar20022"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yashkumar-baghele-6053b6251/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap hero-anim d3 from-right">
          <div className="hero-photo-frame">
            <img src="/profile.png" alt="Portrait of Yashkumar Baghele" />
          </div>
          <div className="hero-photo-tag">status: open_to_work</div>
        </div>
      </div>
    </section>
  );
}
