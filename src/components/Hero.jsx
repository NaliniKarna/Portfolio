import { ArrowRight, Download, MapPin } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter';
import { ROLES } from '../data';
import './Hero.css';

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 42, 2000);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-mesh" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--a" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--b" aria-hidden="true" />

      <div className="hero__inner inner">
        {/* Left col — text */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <MapPin size={11} strokeWidth={2.5} />
            Kathmandu, Nepal
          </div>

          <h1 className="hero__heading">
            <span className="hero__hi">Hi, I'm</span>
            <span className="hero__name">Nalini Karna</span>
          </h1>

          <div className="hero__role-row" aria-live="polite">
            <span className="hero__role-prefix">~/</span>
            <span className="hero__role-text">{role}</span>
            <span className="hero__caret" aria-hidden="true" />
          </div>

          <p className="hero__bio">
            Backend Developer and Software Engineer passionate about building
            scalable applications, intelligent systems, and impactful digital products.
            I specialize in Java, Python, API development, database design, and
            cloud-native technologies, with a strong focus on creating reliable and
            efficient solutions.
          </p>

          {/* Mini stats row */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">2+</span>
              <span className="hero__stat-lbl">Years Coding</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">10+</span>
              <span className="hero__stat-lbl">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">3</span>
              <span className="hero__stat-lbl">Hackathon Wins</span>
            </div>
          </div>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View Projects <ArrowRight size={15} />
            </button>
            <a className="btn btn-outline" href="/resume.pdf" download="Nalini_Karna_Resume.pdf">
              <Download size={14} /> Download CV
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Right col — photo */}
        <div className="hero__photo-col">
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" aria-hidden="true" />
            <div className="hero__photo-ring hero__photo-ring--2" aria-hidden="true" />
            <img
              src="/ProfilePic.jpeg"
              alt="Nalini Karna"
              className="hero__photo"
            />
            <div className="hero__photo-badge">
              <span className="hero__avail-dot" />
              Open to opportunities
            </div>
          </div>
          <div className="hero__tech-row">
            {['Java','Python','React','FastAPI','Docker','PostgreSQL'].map(t => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </button>
    </section>
  );
}
