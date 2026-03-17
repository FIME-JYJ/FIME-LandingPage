import { useState, useEffect } from 'react';
import { FiArrowRight, FiPackage, FiAward, FiUsers, FiTruck } from 'react-icons/fi';
import fimeLogo from '../../img/fime.png';
import './principal.css';

const slides = [
  {
    title: 'Repuestos de Alta Calidad',
    subtitle: 'Para camiones Americanos (Volvo, Freightliner, Internacional, Kenworth, etc). Disponibilidad inmediata y envio a todo el pais.',
  },
  {
    title: 'Mas de 10,000 Referencias',
    subtitle: 'En stock y disponibles para entrega inmediata. Piezas originales y alternativas.',
  },
  {
    title: 'Asesoria Especializada',
    subtitle: 'Nuestro equipo tecnico te ayuda a encontrar la pieza exacta que necesitas.',
  },
];

const stats = [
  { icon: FiPackage, num: '10,000+', label: 'Referencias en Stock' },
  { icon: FiAward,   num: '15+',     label: 'Años de Experiencia' },
  { icon: FiUsers,   num: '500+',    label: 'Clientes Satisfechos' },
  { icon: FiTruck,   num: '24h',     label: 'Envio Express' },
];

export default function Principal() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = 100; // Actualizar cada 100ms
    const duration = 6000; // 6 segundos total
    const increment = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrent(curr => (curr + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [isPaused]);

  const handleDotClick = (index) => {
    if (current === index) {
      // Si es el mismo slide, pausar/reanudar
      setIsPaused(!isPaused);
    } else {
      // Si es diferente slide, cambiar y pausar
      setCurrent(index);
      setProgress(0);
      setIsPaused(true);
    }
  };

  return (
    <>
      {/* Hero */}
      <section id="inicio" className="hero">
        {slides.map((slide, i) => (
          <div key={i} className={`hero__slide${current === i ? ' hero__slide--active' : ''}`}>
            <div className="hero__overlay" />
            <div className="container hero__content">
              <p className="hero__eyebrow">Fime Repuestos</p>
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__subtitle">{slide.subtitle}</p>
              <div className="hero__ctas">
                <a href="#productos" className="btn btn--primary">
                  Ver Productos <FiArrowRight className="btn__icon" />
                </a>
                <a href="#contacto" className="btn btn--ghost">Contactanos</a>
              </div>
            </div>
          </div>
        ))}

        {/* Logo image */}
        <div className="hero__badge">
          <img src={fimeLogo} alt="Fime Repuestos" className="hero__badge-img" />
        </div>

        {/* Numbered Dots with Progress */}
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot${current === i ? ' hero__dot--active' : ''}`}
              onClick={() => handleDotClick(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <svg className="hero__dot-progress" viewBox="0 0 36 36">
                <circle
                  className="hero__dot-bg"
                  cx="18"
                  cy="18"
                  r="16"
                />
                <circle
                  className="hero__dot-fill"
                  cx="18"
                  cy="18"
                  r="16"
                  style={{
                    strokeDashoffset: current === i ? 100 - progress : 100
                  }}
                />
              </svg>
              <span className="hero__dot-number">{i + 1}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="statsbar">
        <div className="container statsbar__inner">
          {stats.map(({ icon: Icon, num, label }) => (
            <div key={label} className="statsbar__item">
              <Icon className="statsbar__icon" />
              <div>
                <div className="statsbar__num">{num}</div>
                <div className="statsbar__label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}