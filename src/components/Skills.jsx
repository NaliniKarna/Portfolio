import useFadeIn from '../hooks/useFadeIn';
import { SKILLS } from '../data';
import './Skills.css';

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

const CATEGORY_ICONS = {
  Languages:  '{ }',
  Backend:    '⚙',
  Frontend:   '◻',
  Databases:  '🗄',
  DevOps:     '⬡',
  'AI & ML':  '◈',
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="inner">
        <FadeIn>
          <span className="section-tag">Skills</span>
          <h2 className="section-title">What I Work With</h2>
        </FadeIn>

        <div className="skills__grid">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.07}>
              <div className="skills__card">
                <div className="skills__card-header">
                  <span className="skills__card-icon">{CATEGORY_ICONS[cat] || '◆'}</span>
                  <span className="skills__card-title">{cat}</span>
                </div>
                <div className="skills__pills">
                  {items.map(item => (
                    <span key={item} className="skills__pill">{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
