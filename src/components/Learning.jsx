import { useEffect } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { LEARNING } from '../data';
import './Learning.css';

function ProgressCard({ item }) {
  const [ref, visible] = useFadeIn(0.4);
  return (
    <div ref={ref} className="learn-card">
      <div className="learn-card__top">
        <div>
          <p className="learn-card__name">{item.name}</p>
          <p className="learn-card__platform">{item.platform}</p>
        </div>
        <span className={`status-pill ${item.done ? 'status-pill--done' : 'status-pill--wip'}`}>
          {item.done ? 'Done' : 'In Progress'}
        </span>
      </div>
      {!item.done && (
        <div className="learn-card__bar">
          <div
            className="learn-card__fill"
            style={{ width: visible ? `${item.progress}%` : '0%' }}
          />
        </div>
      )}
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Learning() {
  return (
    <section id="learning" className="learning-section">
      <div className="inner">
        <FadeIn>
          <span className="section-tag">004 - Learning</span>
          <h2 className="section-title">Always Growing</h2>
        </FadeIn>
        <div className="learning-grid">
          {LEARNING.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <ProgressCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
