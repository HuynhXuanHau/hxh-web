import { useEffect, useRef } from "react";
import "./App.css";

export default function Portfolio() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Cursor
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      if (followerRef.current) {
        setTimeout(() => {
          followerRef.current.style.left = e.clientX + "px";
          followerRef.current.style.top = e.clientY + "px";
        }, 80);
      }
    };
    document.addEventListener("mousemove", moveCursor);

    // Scroll reveal
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  const skills = [
    {
      icon: "⌨️",
      title: "Programming Languages",
      items: ["Python", "Java"],
      tags: ["cyan"],
      cat: "cat-1",
    },
    {
      icon: "🌐",
      title: "Web Development",
      items: ["HTML", "CSS", "Bootstrap", "Laravel", "MySQL"],
      tags: ["purple"],
      cat: "cat-2",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      items: ["Android App", "Kotlin"],
      tags: ["orange"],
      cat: "cat-3",
    },
    {
      icon: "🤖",
      title: "AI / Machine Learning",
      items: ["Basic AI Models", "Transformers", "CNN"],
      tags: ["pink"],
      cat: "cat-4",
    },
    {
      icon: "☁️",
      title: "Cloud & Tools",
      items: ["Git", "Google Colab", "VS Code", "AWS"],
      tags: ["blue"],
      cat: "cat-5",
    },
  ];

  const tagColors = {
    cyan: "tag-cyan",
    purple: "tag-purple",
    orange: "tag-orange",
    yellow: "tag-yellow",
    pink: "tag-pink",
    blue: "tag-blue",
  };

  const achievements = [
    {
      type: "award",
      icon: "🥇",
      label: "Scientific Research Award",
      title: "Third Prize – School-level Scientific Research (2024–2025)",
      desc: (
        <>
          Topic: Building <strong>Su Viet website</strong> integrating AI for
          recognizing Vietnamese historical figures. Applying AI techniques to
          identify images of Vietnamese historical figures.
        </>
      ),
      tags: [{ color: "tag-yellow", text: "AI" }, { color: "tag-cyan", text: "Web" }, { color: "tag-orange", text: "2024–2025" }],
    },
    {
      type: "paper",
      icon: "📄",
      label: "International Publication · IRJMETS 2025",
      title: "Deep Learning Model to Identify Vietnamese Historical Figures",
      desc: (
        <>
          Published in{" "}
          <strong>
            International Research Journal of Modernization in Engineering
            Technology and Science
          </strong>
          . Presenting a deep learning model to identify Vietnamese historical
          figures through portraits.
        </>
      ),
      tags: [{ color: "tag-cyan", text: "Deep Learning" }, { color: "tag-blue", text: "Published" }, { color: "tag-purple", text: "2025" }],
    },
    {
      type: "conference",
      icon: "🏆",
      label: "Oral Presentation · FJCAI 2026",
      title:
        "A Two-stage Architecture for Phishing Email Detection via Domain Analysis with Inverse Transformer Fine-Tuning",
      desc: (
        <>
          Developed a novel <strong>two-stage framework</strong> using Inverse
          Transformer. Model training was conducted solely on clean domains to
          optimize the classification head for high-accuracy phishing detection.
        </>
      ),
      tags: [{ color: "tag-purple", text: "Inverse Transformer" }, { color: "tag-pink", text: "Security" }, { color: "tag-cyan", text: "2026" }],
    },
  ];

  const projects = [
    {
      icon: "🛡️",
      name: "Malware Detection System",
      year: "2026",
      desc: "Static analysis of file attachments (PDF, EXE) to detect malicious patterns using Deep Learning (CNN/MLP).",
      tech: ["Deep Learning", "CNN", "MLP", "Python", "Static Analysis"],
      featured: true,
      visual: "vis-1",
    },
    {
      icon: "🎮",
      name: "2D Game – Thieves Justice",
      year: "2023",
      desc: "A 2D action platformer game built with Java, featuring custom physics and game mechanics.",
      tech: ["Java", "2D Graphics", "Game Dev"],
    },
    {
      icon: "💼",
      name: "Job Recruitment Website",
      year: "2024",
      desc: "Full-stack recruitment platform built with Laravel and MySQL, featuring job listings and applications.",
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    },
    {
      icon: "🌤️",
      name: "Weather Forecast App",
      year: "2025",
      desc: "Android application providing real-time weather forecasts with modern Jetpack Compose UI.",
      tech: ["Kotlin", "Android", "REST API"],
    },
    {
      icon: "🏛️",
      name: "Historical Figures Recognition",
      year: "2025",
      desc: "Deep learning model and web integration to identify Vietnamese historical figures from portraits.",
      tech: ["CNN", "Python", "TensorFlow", "Web Integration"],
    },
  ];

  const contacts = [
    { icon: "📞", text: "0387578443", href: "tel:0387578443" },
    { icon: "📧", text: "hauhx.23ai@vku.udn.vn", href: "mailto:hauhx.23ai@vku.udn.vn" },
    { icon: "✉️", text: "xuanhau17082005@gmail.com", href: "mailto:xuanhau17082005@gmail.com" },
    { icon: "📍", text: "Ngu Hanh Son, Da Nang", href: "#" },
    { icon: "💻", text: "github.com/hxhau", href: "https://github.com/hxhau" },
  ];

  const marqueeItems = [
    "AI Engineering", "Deep Learning", "Python", "Kotlin", "Laravel",
    "Android Dev", "Research", "CNN", "Transformers", "AWS", "Full Stack",
    "AI Engineering", "Deep Learning", "Python", "Kotlin", "Laravel",
    "Android Dev", "Research", "CNN", "Transformers", "AWS", "Full Stack",
  ];

  return (
    <div className="portfolio">
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      <div className="noise-overlay" />
      <div className="grid-bg" />

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="dot" />
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            <span className="line"><span>Huynh</span></span>
            <span className="line"><span>Xuan</span></span>
            <span className="line"><span className="name-gradient">Hau.</span></span>
          </h1>

          <p className="hero-title">// AI Engineering Student · 3rd Year</p>

          <p className="hero-bio">
            AI Engineering student with a{" "}
            <strong>published international paper</strong> and a proven track
            record in scientific research. Skilled in{" "}
            <strong>end-to-end AI development</strong> — from web & mobile
            apps to deep learning models.
          </p>

          <div className="hero-cta">
            <a href="https://github.com/hxhau" className="btn-primary">
              <span>💻</span> GitHub
            </a>
            <a href="mailto:hauhx.23ai@vku.udn.vn" className="btn-secondary">
              <span>✉️</span> Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-emoji">📄</span>
              <div className="stat-number">1</div>
              <div className="stat-label">International Paper</div>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">🏆</span>
              <div className="stat-number">3</div>
              <div className="stat-label">Awards & Conferences</div>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">🚀</span>
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-card">
              <span className="stat-emoji">⭐</span>
              <div className="stat-number">3.35</div>
              <div className="stat-label">GPA / 4.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-strip">
        <div className="contact-grid">
          {contacts.map((c, i) => (
            <a key={i} href={c.href} className="contact-item">
              <span className="icon">{c.icon}</span>
              {c.text}
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section">
        <div className="section-header reveal">
          <span className="section-number">01</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className={`skill-category ${s.cat}`}>
              <span className="skill-cat-icon">{s.icon}</span>
              <div className="skill-cat-title">{s.title}</div>
              <div className="skill-tags">
                {s.items.map((item, j) => (
                  <span key={j} className={`skill-tag ${tagColors[s.tags[0]]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">
        <div className="section-header reveal">
          <span className="section-number">02</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>
        <div className="edu-card reveal">
          <div>
            <div className="edu-period">2023 — Present</div>
            <div className="edu-school">Vietnam – Korea University · Danang University</div>
            <h3 className="edu-degree">Artificial Intelligence Engineering</h3>
            <div className="edu-meta">
              <span className="edu-badge gpa-badge">GPA 3.35 / 4.0</span>
              <span className="edu-badge year-badge">3rd Year Student</span>
              <span className="edu-badge year-badge">2022 – 2026</span>
            </div>
          </div>
          <div className="edu-gpa-big">
            <div className="gpa-number">3.35</div>
            <div className="gpa-label">out of 4.0</div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section">
        <div className="section-header reveal">
          <span className="section-number">03</span>
          <h2 className="section-title">Achievements</h2>
          <div className="section-line" />
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-card ${a.type}`}>
              <div className="achievement-icon-wrap">{a.icon}</div>
              <div>
                <div className="achievement-type">{a.label}</div>
                <h3 className="achievement-title">{a.title}</h3>
                <p className="achievement-desc">{a.desc}</p>
                <div className="achievement-tags">
                  {a.tags.map((t, j) => (
                    <span key={j} className={`skill-tag ${t.color}`}>
                      {t.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section">
        <div className="section-header reveal">
          <span className="section-number">04</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card${p.featured ? " featured" : ""}`}>
              {p.featured ? (
                <>
                  <div>
                    <div className="project-header">
                      <div>
                        <span className="project-icon">{p.icon}</span>
                      </div>
                      <span className="project-year">{p.year}</span>
                    </div>
                    <h3 className="project-name">{p.name}</h3>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-tech">
                      {p.tech.map((t, j) => (
                        <span key={j} className="tech-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`project-visual ${p.visual}`}>
                    <div className="float-shape float-1" />
                    <div className="float-shape float-2" />
                    <div className="float-shape float-3" />
                    <span style={{ fontSize: "4rem", zIndex: 1, position: "relative" }}>{p.icon}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="project-header">
                    <div>
                      <span className="project-icon">{p.icon}</span>
                    </div>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t, j) => (
                      <span key={j} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-name">HAU HX</div>
        <p className="footer-tagline">
          AI Engineering · Da Nang · <span>2026</span>
        </p>
      </footer>
    </div>
  );
}