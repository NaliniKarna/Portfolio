import useFadeIn from '../hooks/useFadeIn';
import { ACHIEVEMENTS } from '../data';
import './Achievements.css';

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="inner">
        <FadeIn>
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Notable Wins</h2>
        </FadeIn>
        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="ach-card">
                <div className="ach-icon" aria-hidden="true">{a.emoji}</div>
                <p className="ach-text">{a.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
