import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',        id: 'about'        },
  { label: 'Skills',       id: 'skills'        },
  { label: 'Projects',     id: 'projects'      },
  { label: 'Achievements', id: 'achievements'  },
  { label: 'Contact',      id: 'contact'       },
];

export default function Navbar({ dark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <button className="nav-logo" onClick={() => scrollTo('hero')}>
          NK<span className="nav-logo-dot">.</span>
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeId === id ? 'nav-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="nav-icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="nav-icon-btn nav-hamburger" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile">
          {NAV_LINKS.map(({ label, id }) => (
            <button key={id} className="nav-mobile-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
