import { useState } from 'react';
import './index.css';

import Cursor       from './components/Cursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Skills       from './components/Skills';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(d => {
      const next = !d;
      document.documentElement.dataset.theme = next ? '' : 'light';
      return next;
    });
  };

  return (
    <>
      <Cursor />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
