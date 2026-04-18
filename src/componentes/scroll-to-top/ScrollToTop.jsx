import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset;
      
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleMouseDown = (e) => {
    scrollToTop(e);
  };

  const handleTouchStart = (e) => {
    scrollToTop(e);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={scrollToTop}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="scroll-to-top-btn"
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      title="Volver al inicio"
      style={{
        position: 'fixed',
        bottom: '160px',
        right: '30px',
        width: '50px',
        height: '50px',
        backgroundColor: '#00aaff',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        zIndex: 99999,
        pointerEvents: 'auto',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#007acc';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#00aaff';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      <FiArrowUp />
    </div>
  );
}