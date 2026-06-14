import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import useFadeIn from '../hooks/useFadeIn';
import './Contact.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in name, email, and message.');
      return;
    }
    const mailto = `mailto:karnanalini13@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailto;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('karnanalini13@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact">
      <div className="inner">
        <FadeIn>
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Build<br />Something.</h2>
        </FadeIn>

        <div className="contact__grid">
          <FadeIn delay={0.1}>
            <p className="contact__desc">
              Open to internships, collaborations, and interesting problems.
              Based in Kathmandu - available globally.
            </p>
            <div className="contact__form">
              <input className="contact__input" type="text"  placeholder="Name"    value={form.name}    onChange={update('name')} />
              <input className="contact__input" type="email" placeholder="Email"   value={form.email}   onChange={update('email')} />
              <input className="contact__input" type="text"  placeholder="Subject" value={form.subject} onChange={update('subject')} />
              <textarea className="contact__input contact__textarea" placeholder="Message" value={form.message} onChange={update('message')} />
              <button className="btn btn-accent" onClick={handleSend}>Send Message →</button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="contact__info">
              <div className="contact-card">
                <div className="contact-card__icon">✉️</div>
                <div>
                  <p className="contact-card__label">Email</p>
                  <p className="contact-card__value">karnanalini13@gmail.com</p>
                </div>
                <button className="contact-card__copy" onClick={copyEmail} aria-label="Copy email">
                  {copied ? <Check size={15} color="#4ade80" /> : <Copy size={15} />}
                </button>
              </div>

              <a href="https://github.com/NaliniKarna" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--link">
                <div className="contact-card__icon"><GithubIcon /></div>
                <div>
                  <p className="contact-card__label">GitHub</p>
                  <p className="contact-card__value">github.com/NaliniKarna</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/nalini-karna" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--link">
                <div className="contact-card__icon"><LinkedinIcon /></div>
                <div>
                  <p className="contact-card__label">LinkedIn</p>
                  <p className="contact-card__value">linkedin.com/in/nalini-karna</p>
                </div>
              </a>

              <div className="avail-badge">
                <span className="avail-badge__dot" />
                Available for internships &amp; collaborations
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
