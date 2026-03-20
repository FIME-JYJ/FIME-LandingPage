import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Mostrar después de 300px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${showScrollTop ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      title="Volver al inicio"
    >
      <FiArrowUp className="scroll-to-top__icon" />
    </button>
  );
}