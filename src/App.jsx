import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import profile from "./assets/profile.jpg"

function App() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    clientX: 50,
    clientY: 50,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2

      setMouse({
        x,
        y,
        clientX: event.clientX,
        clientY: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const skills = [
    {
      name: "Python",
      level: "85%",
    },
    {
      name: "Java",
      level: "75%",
    },
    {
      name: "SQL",
      level: "78%",
    },
    {
      name: "HTML / CSS",
      level: "85%",
    },
    {
      name: "JavaScript",
      level: "65%",
    },
    {
      name: "Power BI",
      level: "70%",
    },
  ]

  const projects = [
    {
      number: "01",
      title: "Career Pilot",
      description:
        "An AI-assisted career guidance platform designed to help students explore career paths, skills and learning opportunities.",
      tags: ["AI", "Web", "Career"],
    },
    {
      number: "02",
      title: "AI Safety Shield",
      description:
        "A cybersecurity-focused concept designed to help users understand and protect themselves from potential AI-related digital threats.",
      tags: ["AI", "Cybersecurity", "Safety"],
    },
    {
      number: "03",
      title: "RAG Knowledge Assistant",
      description:
        "A retrieval-augmented AI application that answers questions using trusted documents and knowledge sources.",
      tags: ["Python", "AI", "RAG"],
    },
  ]

  return (
    <div className="app">

      {/* MOUSE LIGHT */}

      <div
        className="cursor-glow"
        style={{
          left: `${mouse.clientX}px`,
          top: `${mouse.clientY}px`,
        }}
      ></div>

      <div className="background-grid"></div>

      <div className="background-noise"></div>

      {/* NAVBAR */}

      <Navbar />

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <div className="status">
            <span className="status-dot"></span>

            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">
            HELLO, I'M
          </p>

          <h1>
            SATYAM
            <br />

            <span>
              UPADHYAY
            </span>
          </h1>

          <h2>
            Computer Science Student
            <span> • </span>
            AI & Software Developer
          </h2>

          <p className="hero-description">
            I build practical digital experiences using
            programming, artificial intelligence, data
            analytics and cybersecurity concepts.
            <br />
            Always curious. Always learning. Always building.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              Explore Projects

              <span>
                →
              </span>
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>

          </div>

          <div className="social-row">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              ◉ GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>

            <a
              href="mailto:satyamupadhyay304@gmail.com"
            >
              ✉ Email
            </a>

          </div>

          <div className="hero-quote">
            "A BETTER TOMORROW"
            <br />
            "THROUGH TECHNOLOGY"
          </div>

        </div>


        {/* =====================================
            MOVING PORTRAIT
        ===================================== */}

        <div className="hero-visual">

          <div className="cyber-ring ring-one"></div>

          <div className="cyber-ring ring-two"></div>


          <div
            className="portrait-wrapper"
            style={{
              transform: `
                perspective(1200px)
                rotateY(${mouse.x * 5}deg)
                rotateX(${mouse.y * -4}deg)
                translateX(${mouse.x * 10}px)
                translateY(${mouse.y * 6}px)
              `,
            }}
          >

            <div className="portrait-frame">

              <div className="scan-line"></div>

              <img
                src={profile}
                alt="Satyam Upadhyay"
                className="profile-image"
              />

              <div className="portrait-purple"></div>

              <div className="portrait-grid"></div>

              <div className="portrait-vignette"></div>

              <div className="corner corner-tl"></div>

              <div className="corner corner-tr"></div>

              <div className="corner corner-bl"></div>

              <div className="corner corner-br"></div>

            </div>

          </div>


          {/* LEFT HUD */}

          <div className="hud-card hud-left">

            <span>
              BUILD
            </span>

            <span>
              LEARN
            </span>

            <span>
              IMPROVE
            </span>

            <span>
              REPEAT_
            </span>

          </div>


          {/* RIGHT HUD */}

          <div className="hud-card hud-right">

            <small>
              DEVELOPER MODE
            </small>

            <strong>
              AI × HUMAN
            </strong>

            <span>
              A BRIGHTER
              <br />
              TOMORROW
            </span>

          </div>


          <div className="developer-label">
            // SATYAM.DEV
          </div>

        </div>

      </section>


      {/* =====================================
          STATS
      ===================================== */}

      <section className="stats-section">

        <div className="stats-card">

          <div className="stat">

            <strong>
              03+
            </strong>

            <span>
              PROJECTS
            </span>

          </div>

          <div className="stat">

            <strong>
              06+
            </strong>

            <span>
              TECHNOLOGIES
            </span>

          </div>

          <div className="stat">

            <strong>
              ∞
            </strong>

            <span>
              CURIOSITY
            </span>

          </div>

          <div className="stat">

            <strong>
              01
            </strong>

            <span>
              GOAL: IMPACT
            </span>

          </div>

        </div>


        <div className="terminal-card">

          <div className="terminal-top">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <div className="terminal-body">

            <p>
              <b>
                satyam@portfolio
              </b>
              :~$ whoami
            </p>

            <p className="terminal-output">
              &gt; computer_science_student
            </p>

            <p>
              <b>
                satyam@portfolio
              </b>
              :~$ interests
            </p>

            <p className="terminal-output">
              &gt; AI, Software, Data, Cybersecurity
            </p>

            <p>
              <b>
                satyam@portfolio
              </b>
              :~$ _
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          ABOUT
      ===================================== */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="section-heading">

          <p className="eyebrow">
            01 / ABOUT ME
          </p>

          <h2>
            Turning ideas into

            <span>
              useful technology.
            </span>
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-main">

            <p className="large-text">
              I'm a Computer Science student interested
              in building practical software and
              AI-powered applications.
            </p>

            <p>
              My interests include software development,
              artificial intelligence, data analytics and
              cybersecurity.
            </p>

            <p>
              I enjoy taking an idea, understanding the
              problem behind it and turning it into
              something people can actually use.
            </p>

            <a
              href="#skills"
              className="secondary-button"
            >
              Explore My Skills →
            </a>

          </div>


          <div className="about-stats">

            <div className="stat-card">

              <strong>
                06+
              </strong>

              <span>
                Technologies
              </span>

            </div>

            <div className="stat-card">

              <strong>
                03+
              </strong>

              <span>
                Projects
              </span>

            </div>

            <div className="stat-card">

              <strong>
                ∞
              </strong>

              <span>
                Curiosity
              </span>

            </div>

            <div className="stat-card">

              <strong>
                01
              </strong>

              <span>
                Goal: Keep Building
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          SKILLS
      ===================================== */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <p className="eyebrow">
            02 / SKILLS
          </p>

          <h2>
            Tools I use to

            <span>
              build things.
            </span>
          </h2>

        </div>


        <div className="skills-layout">

          <div className="terminal-card big-terminal">

            <div className="terminal-top">

              <span></span>
              <span></span>
              <span></span>

            </div>

            <div className="terminal-body">

              <p>
                <b>
                  satyam@dev
                </b>
                :~$ skills
              </p>

              <p className="terminal-output">
                programming
              </p>

              <p>
                <b>
                  satyam@dev
                </b>
                :~$ focus
              </p>

              <p className="terminal-output">
                artificial_intelligence
              </p>

              <p>
                <b>
                  satyam@dev
                </b>
                :~$ mission
              </p>

              <p className="terminal-output">
                build.useful.technology()
              </p>

            </div>

          </div>


          <div className="skills-list">

            {skills.map((skill) => (

              <div
                className="skill-item"
                key={skill.name}
              >

                <div className="skill-info">

                  <span>
                    {skill.name}
                  </span>

                  <span>
                    {skill.level}
                  </span>

                </div>

                <div className="skill-bar">

                  <div
                    className="skill-progress"
                    style={{
                      width: skill.level,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          PROJECTS
      ===================================== */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <p className="eyebrow">
            03 / PROJECTS
          </p>

          <h2>
            Things I'm

            <span>
              building.
            </span>
          </h2>

        </div>


        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-icon">
                ↗
              </div>

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================
          EDUCATION
      ===================================== */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-heading">

          <p className="eyebrow">
            04 / EDUCATION
          </p>

          <h2>
            Learning,

            <span>
              growing, building.
            </span>
          </h2>

        </div>


        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-date">
              PRESENT
            </div>

            <div className="timeline-content">

              <h3>
                Computer Science
              </h3>

              <p>
                Undergraduate studies focused on
                programming, databases, software
                development and emerging technologies.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-date">
              SCHOOL
            </div>

            <div className="timeline-content">

              <h3>
                Ramakrishna Mission School
              </h3>

              <p>
                Completed higher secondary education
                with a foundation in science and
                technology.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT
      ===================================== */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="contact-box">

          <p className="eyebrow">
            05 / CONTACT
          </p>

          <h2>
            Let's build

            <span>
              something great.
            </span>
          </h2>

          <p>
            I'm open to learning opportunities,
            collaborations, projects and conversations
            around technology.
          </p>

          <a
            href="mailto:satyamupadhyay304@gmail.com"
            className="primary-button"
          >
            Start a Conversation

            <span>
              →
            </span>
          </a>


          <div className="contact-links">

            <a
              href="mailto:satyamupadhyay304@gmail.com"
            >
              ✉ Email
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              ◉ GitHub
            </a>

          </div>

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <footer>

        <div>

          <strong>
            Satyam.
          </strong>

          <span>
            Building the future,
            one project at a time.
          </span>

        </div>


        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <p>
          © 2026 Satyam Upadhyay
        </p>

      </footer>

    </div>
  )
}

export default App