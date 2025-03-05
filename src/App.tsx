import React, { useState, useEffect } from 'react';
import './App.css';

// Tech stack data
interface Technology {
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'infrastructure';
  level: number; // 1-5 skill level
}

// Experience data
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tools: string[];
}

// Blog post data
interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', type: 'frontend', level: 5 },
  { name: 'TypeScript', type: 'frontend', level: 5 },
  { name: 'Next.js', type: 'frontend', level: 4 },
  { name: 'Tailwind CSS', type: 'frontend', level: 4 },
  { name: 'Leaflet', type: 'frontend', level: 4 },
  
  // Backend
  { name: 'Node.js', type: 'backend', level: 5 },
  { name: 'Express', type: 'backend', level: 5 },
  { name: 'Python', type: 'backend', level: 4 },
  { name: 'Django', type: 'backend', level: 3 },
  
  // Database
  { name: 'MongoDB', type: 'database', level: 5 },
  { name: 'SQL', type: 'database', level: 4 },
  { name: 'PostgreSQL', type: 'database', level: 4 },
  { name: 'Redis', type: 'database', level: 3 },
  
  // DevOps
  { name: 'Azure', type: 'devops', level: 4 },
  { name: 'CI/CD', type: 'devops', level: 3 },

  // Testing/Quality
  { name: 'Playwright', type: 'testing', level: 5 },
  { name: 'Jest', type: 'testing', level: 4 },
  { name: 'Cypress', type: 'testing', level: 4 },
  { name: 'Chai', type: 'testing', level: 3 },

  // Cloud/Infrastructure
  { name: 'Netlify', type: 'infrastructure', level: 5 },
  { name: 'Vercel', type: 'infrastructure', level: 5 },
  { name: 'AWS', type: 'infrastructure', level: 4 },
  { name: 'GCP', type: 'infrastructure', level: 3 },

];

const experiences: Experience[] = [
  {
    title: "Test Automation Engineer",
    company: "Spark NZ",
    period: "2023 - 2024",
    description: "Internship and extended contract working on automated testing for Spark's CRM system and Marketing Automation campaigns.",
    tools: ["Playwright", "JavaScript", "Azure DevOps", "Azure Logic Apps", "Cosmos DB"]
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

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable APIs with Node.js and TypeScript",
    description: "A comprehensive guide to structuring your backend for performance and maintainability.",
    date: "Coming soon",
    readTime: "10 min read",
    link: "#"
  },
  {
    title: "React Performance Optimization Techniques",
    description: "Practical strategies to improve your React application's speed and user experience.",
    date: "Coming soon",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "Database Selection Guide for Modern Web Applications",
    description: "How to choose the right database technology for your specific project requirements.",
    date: "Coming soon",
    readTime: "12 min read",
    link: "#"
  }
];

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
  }, []);
  
  const renderTechCategory = (type: Technology['type'], title: string) => {
    const techs = technologies.filter(tech => tech.type === type);
    
    return (
      <div className="tech-category">
        <h3>{title}</h3>
        <div className="tech-list">
          {techs.map(tech => (
            <div key={tech.name} className="tech-item">
              <span>{tech.name}</span>
              <div className="skill-level">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`skill-dot ${i < tech.level ? 'filled' : ''}`} 
                  />
                ))}
              </div>
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
          <div className="title">Full Stack Developer</div>
        </div>
        <div className="nav-links">
          <nav>
            <a href="#about">About</a>
            <a href="#tech">Tech Stack</a>
            <a href="#experience">Experience</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="mailto:benteiko@gmail.com" className="contact-button">Email Me</a>
          </nav>
        </div>
      </div>
    </header>
      
      <section className="hero">
        <div className="value-proposition">
          <h2>Full-stack developer delivering high-impact web solutions</h2>
          <p>I transform business requirements into elegant, scalable applications that users love</p>
        </div>
      </section>
      
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I create fast, reliable websites tailored for local businesses, combining clean design with solid performance. With experience in modern web technologies like TypeScript, React, and Node.js, I build custom solutions that help businesses grow online. My background in testing and automation ensures every site is built to last, providing long-term value and easy maintenance.</p>
          </div>
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
      
      <section id="blog" className="blog">
        <h2>Blog</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.link} className="blog-card">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span className="read-more">Read more →</span>
            </a>
          ))}
        </div>
      </section>
      
      <section id="contact" className="cta">
        <h2>Let's Work Together</h2>
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
        </div>
        <div className="links">
          <a href="https://github.com/ben-marrett" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ben-teiko-marrett/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
      
      <footer>
        <p>© {new Date().getFullYear()} Ben Marrett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;