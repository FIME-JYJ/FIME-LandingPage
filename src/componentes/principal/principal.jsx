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

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, []);

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

        {/* Dots */}
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot${current === i ? ' hero__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
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