import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">
        © {new Date().getFullYear()} Nalini Karna
      </span>
      <div className="footer__links">
        <a href="https://github.com/NaliniKarna" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
        <a href="https://linkedin.com/in/nalini-karna" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        <a href="mailto:karnanalini13@gmail.com" className="footer__link">Email</a>
      </div>
    </footer>
  );
}
