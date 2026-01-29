import React, { useState, useEffect } from 'react';
import './App.css';

// Tech stack data
interface Technology {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'infrastructure';
  context: string; // Usage context instead of skill level
}

// Project data
interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
  seLens: string; // Software Engineering perspective
  qaLens: string; // QA perspective
}

// Experience data
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tools: string[];
}

const technologies: Technology[] = [
  // Frontend
  { name: 'TypeScript', type: 'frontend', context: 'CLI tools, automation, web apps' },
  { name: 'React', type: 'frontend', context: 'Feature development, production sites' },
  { name: 'Next.js', type: 'frontend', context: 'Full-stack React applications' },
  { name: 'Tailwind CSS', type: 'frontend', context: 'UI development' },
  { name: 'Leaflet', type: 'frontend', context: 'Interactive mapping' },

  // Backend
  { name: 'Node.js', type: 'backend', context: 'APIs, CLI tools, backend services' },
  { name: 'Express', type: 'backend', context: 'REST APIs, middleware' },
  { name: 'Java', type: 'backend', context: 'Backend services, state management' },
  { name: 'Spring Boot', type: 'backend', context: 'REST APIs, concurrency control' },

  // Database
  { name: 'PostgreSQL', type: 'database', context: 'Production databases' },
  { name: 'Supabase', type: 'database', context: 'Backend-as-a-service, real-time subscriptions' },
  { name: 'MongoDB', type: 'database', context: 'Document storage' },
  { name: 'Cosmos DB', type: 'database', context: 'NoSQL at scale' },

  // DevOps
  { name: 'Azure DevOps', type: 'devops', context: 'CI/CD, test management' },
  { name: 'Azure Logic Apps', type: 'devops', context: 'Workflow automation' },
  { name: 'Docker', type: 'devops', context: 'Containerised development and deployment' },

  // Testing/Quality
  { name: 'Playwright', type: 'testing', context: 'E2E automation, CI/CD integration' },
  { name: 'Jest', type: 'testing', context: 'Unit & component testing' },
  { name: 'k6', type: 'testing', context: 'Performance testing' },
  { name: 'Postman', type: 'testing', context: 'API testing' },

  // Cloud/Infrastructure
  { name: 'Netlify', type: 'infrastructure', context: 'Static site deployment' },
  { name: 'Vercel', type: 'infrastructure', context: 'Frontend hosting' },
  { name: 'Railway', type: 'infrastructure', context: 'Full-stack deployment' },
];

const projects: Project[] = [
  {
    title: 'Flight Rebooking Service',
    description: 'Backend service for airline disruption recovery. Demonstrates safe state transitions, idempotent operations, and optimistic concurrency control to prevent double-bookings.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/ben-marrett/flight-rebooking-service',
    seLens: 'State machine design, idempotency patterns, optimistic locking, REST API design',
    qaLens: 'Concurrent operation safety, booking state edge cases, API contract validation'
  },
  {
    title: 'Shieldstack',
    description: 'Published npm CLI tool for ZEC/BTC portfolio tracking with goal-based scenario analysis.',
    tech: ['TypeScript', 'Node.js'],
    npmUrl: 'https://www.npmjs.com/package/shieldstack',
    repoUrl: 'https://github.com/ben-marrett/shieldstack',
    seLens: 'CLI UX design, npm publishing, API integration',
    qaLens: 'Input validation, edge case handling, error messaging'
  },
  {
    title: 'Builder Website',
    description: 'Modern, responsive construction company website. Features before/after project gallery, service showcase, team profiles, and contact form.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Jest'],
    liveUrl: 'https://builder-website-example.netlify.app',
    seLens: 'Component architecture, responsive design, animation system',
    qaLens: 'Jest test coverage, accessibility focus'
  },
  {
    title: "Crow's Nest",
    description: 'Real-time ship tracking and route planning for New Zealand waters. Live AIS data, weather popups, and nautical-themed UI.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Leaflet', 'WebSocket'],
    liveUrl: 'https://crowsnest.up.railway.app',
    seLens: 'Real-time data pipeline, external API integration, database design',
    qaLens: 'Error handling, WebSocket reliability, data validation'
  },
  {
    title: 'Playwright Test Examples',
    description: 'Production E2E test suite demonstrating page object model and CI integration.',
    tech: ['Playwright', 'TypeScript'],
    repoUrl: 'https://github.com/ben-marrett/playwright-test-examples',
    seLens: '',
    qaLens: 'Page object model, test organization, CI/CD integration, cross-browser testing'
  }
];

const experiences: Experience[] = [
  {
    title: "Freelance Software Developer",
    company: "Kaipara Webworks",
    period: "2025 - Present",
    description: "Full-stack web development for clients. Building React/Next.js applications with Supabase backends, serverless Edge Functions, and third-party API integrations.",
    tools: ["React", "Next.js", "TypeScript", "Supabase", "Edge Functions", "Resend"]
  },
  {
    title: "Test Automation Engineer",
    company: "Spark NZ",
    period: "2023 - 2024",
    description: "Internship and extended contract working on automated testing for Spark's CRM system and Marketing Automation campaigns.",
    tools: ["Playwright", "TypeScript", "Azure DevOps", "Azure Logic Apps", "Cosmos DB", "k6", "Postman", "Manual Testing", "Test Design"]
  },
  {
    title: "Full Stack Developer",
    company: "Greenback Ltd.",
    period: "2023 - 2023",
    description: "Developed responsive web application for an education company.",
    tools: ["React", "Python", "Django"]
  },
  {
    title: "Full Stack Developer Apprentice",
    company: "Dev Academy Aotearoa",
    period: "2022 - 2023",
    description: "Software development bootcamp with a focus on full stack development and integrated human skills curriculum.",
    tools: ["JavaScript", "React", "CSS", "HTML", "Node.js", "Express", "SQLite3"]
  }
];

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
    })
      .then(() => {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => alert('Something went wrong. Please try again.'));
  };
  
  const renderTechCategory = (type: Technology['type'], title: string) => {
    const techs = technologies.filter(tech => tech.type === type);

    return (
      <div className="tech-category">
        <h3>{title}</h3>
        <div className="tech-list">
          {techs.map(tech => (
            <div key={tech.name} className="tech-item">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-context">{tech.context}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`app ${visible ? 'visible' : ''}`}>
    <header>
      <div className="header-content">
        <div className="logo-title">
          <h1>Ben Teiko Marrett</h1>
          <div className="title">Software Engineer & QA Specialist</div>
        </div>
        
        {/* Hamburger button for mobile */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#tech" onClick={() => setIsMenuOpen(false)}>Tech Stack</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="/BenMarrett_CV.pdf" download className="cv-button">Download CV</a>
            <a href="#contact" className="contact-button" onClick={() => setIsMenuOpen(false)}>Get in Touch</a>
          </nav>
        </div>
      </div>
    </header>
      
      <section className="hero">
        <div className="value-proposition">
          <h2>I build, test, and ship reliable software</h2>
          <p>Full-stack owner from design to production</p>
        </div>
      </section>
      
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I build and test software for a living. My work spans full-stack web development, test automation, and production operations. I've shipped React apps, CLI tools on npm, and automated test suites running in CI/CD pipelines. I care about code that works, stays working, and is easy to change.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-lenses">
                {project.seLens && (
                  <div className="lens">
                    <span className="lens-label">Engineering:</span>
                    <span className="lens-text">{project.seLens}</span>
                  </div>
                )}
                {project.qaLens && (
                  <div className="lens">
                    <span className="lens-label">QA:</span>
                    <span className="lens-text">{project.qaLens}</span>
                  </div>
                )}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                    Live
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
                {project.npmUrl && (
                  <a href={project.npmUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    npm
                  </a>
                )}
              </div>
              {/* TODO: Add screenshot/visual for {project.title} */}
            </div>
          ))}
        </div>
      </section>

      <section id="tech" className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech-categories">
          {renderTechCategory('frontend', 'Frontend')}
          {renderTechCategory('backend', 'Backend')}
          {renderTechCategory('database', 'Database')}
          {renderTechCategory('devops', 'DevOps')}
          {renderTechCategory('infrastructure', 'Cloud/Hosting')}
          {renderTechCategory('testing', 'Testing & QA')}
        </div>
      </section>
      
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p>{exp.description}</p>
                <div className="timeline-tools">
                  <span className="tools-label">Primary tools:</span>
                  <div className="tools-list">
                    {exp.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Let's Work Together</h2>
        <div className="contact-layout">
          <div className="contact-form-wrapper">
            {formSubmitted ? (
              <div className="form-success">
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleFormSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden-field">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={200}
                    value={formData.name}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    value={formData.email}
                    onChange={handleFormChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="form-textarea"
                  />
                </div>
                <button type="submit" className="form-submit">Send Message</button>
              </form>
            )}
          </div>
          <div className="contact-details">
            <div className="contact-info">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+64 21 142 3831</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:benteiko@gmail.com">benteiko@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <a href="https://github.com/ben-marrett" target="_blank" rel="noopener noreferrer">github.com/ben-marrett</a>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <a href="https://linkedin.com/in/ben-teiko-marrett/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ben-teiko-marrett</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer>
        <p>© {new Date().getFullYear()} Ben Marrett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;