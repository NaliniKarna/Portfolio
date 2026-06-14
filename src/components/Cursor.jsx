import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    let raf;
    const tick = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.18;
      pos.current.ry += (my - pos.current.ry) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top  = my + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px';
        ringRef.current.style.top  = pos.current.ry + 'px';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow = () => {
      if (dotRef.current)  { dotRef.current.style.width = '16px';  dotRef.current.style.height = '16px'; }
      if (ringRef.current) { ringRef.current.style.width = '56px'; ringRef.current.style.height = '56px'; ringRef.current.style.opacity = '0.2'; }
    };
    const shrink = () => {
      if (dotRef.current)  { dotRef.current.style.width = '10px';  dotRef.current.style.height = '10px'; }
      if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.opacity = '0.4'; }
    };

    const targets = document.querySelectorAll('a, button, .toggle, .project-card, .ach-card');
    targets.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      targets.forEach(el => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink); });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
