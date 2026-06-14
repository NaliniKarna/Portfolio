import { useState, useEffect } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';
import { STATIC_PROJECTS, GH_COLORS } from '../data';
import './Projects.css';

const GithubIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function ProjectCard({ project, index, isGH }) {
  const color = project.color || '#ff6b4a';
  const name  = isGH ? project.name.replace(/[-_]/g, ' ') : project.name;
  const desc  = isGH ? (project.description || 'No description provided.') : project.desc;
  const techs = isGH
    ? [project.language, ...(project.topics || [])].filter(Boolean).slice(0, 5)
    : project.tech;
  const href  = isGH ? project.html_url : project.github;
  const stars = isGH ? project.stargazers_count : null;

  return (
    <FadeIn delay={index * 0.07}>
      <div className="project-card" style={{ '--c': color }}>
        {isGH && <span className="project-card__badge">Live GitHub</span>}

        <p className="project-card__num">{String(index + 1).padStart(2, '0')}</p>

        <div className="project-card__icon" style={{ background: color + '18', border: `1px solid ${color}30` }}>
          {isGH
            ? <GithubIcon size={22} color={color} />
            : <span style={{ fontSize: '1.4rem' }}>{project.emoji}</span>
          }
        </div>

        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__desc">{desc}</p>

        <div className="project-card__tech">
          {techs.map(t => (
            <span key={t} className="project-card__tag" style={{ borderColor: color + '55', color }}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__footer">
          <a href={href} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <GithubIcon size={13} /> Code
          </a>
          {stars != null && (
            <span className="project-card__stars">
              <Star size={12} /> {stars}
            </span>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  const [ghMode, setGhMode]   = useState(false);
  const [repos, setRepos]     = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [headerRef, headerVisible] = useFadeIn();

  useEffect(() => {
    if (!ghMode) return;
    setLoading(true); setError(null);
    fetch('https://api.github.com/users/NaliniKarna/repos?sort=updated&per_page=12&type=public')
      .then(r => { if (!r.ok) throw new Error('API error'); return r.json(); })
      .then(data => {
        const filtered = data
          .filter(r => !r.fork && r.name !== 'NaliniKarna')
          .slice(0, 9)
          .map((r, i) => ({ ...r, color: GH_COLORS[i % GH_COLORS.length] }));
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not reach GitHub API. Showing static projects.');
        setGhMode(false);
        setLoading(false);
      });
  }, [ghMode]);

  const displayed = ghMode ? repos : STATIC_PROJECTS;

  return (
    <section id="projects" className="projects-section">
      <div className="inner">
        <div ref={headerRef} className={`fade-in projects__header ${headerVisible ? 'visible' : ''}`}>
          <div>
            <span className="section-tag">Projects</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>What I Build</h2>
          </div>
          <div className="projects__toggle-wrap">
            <span className="projects__toggle-label">Static</span>
            <button
              className={`toggle ${ghMode ? 'toggle--on' : ''}`}
              onClick={() => setGhMode(m => !m)}
              aria-pressed={ghMode}
              aria-label="Toggle live GitHub repos"
            />
            <span className="projects__toggle-label">Live GitHub</span>
          </div>
        </div>

        {error && <p className="projects__error">{error}</p>}

        {loading ? (
          <div className="projects__loading">
            <div className="spinner" /> Fetching repos from GitHub…
          </div>
        ) : (
          <div className="projects__grid">
            {displayed.map((p, i) => (
              <ProjectCard key={p.id ?? p.name} project={p} index={i} isGH={ghMode} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
