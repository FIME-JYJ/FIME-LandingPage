import React, { useState, useEffect } from 'react';

import './bannerCat.css';
import catalogo1 from '../../img/PresentacionCatalogo/catalogo1.jpg';
import catalogo2 from '../../img/PresentacionCatalogo/catalogo2.jpeg';
import catalogo3 from '../../img/PresentacionCatalogo/catalogo3.jpg';


const slides = [
    {
        image: catalogo1, // Ruta relativa a tu carpeta public/img
        title: 'CATÁLOGO DE REPUESTOS',
        subtitle: 'Encuentra la potencia y confiabilidad que tu negocio necesita'
    },
    {
        image: catalogo2,
        title: 'REPUESTOS ORIGINALES',
        subtitle: 'Máximo rendimiento y durabilidad garantizada para tu flota'
    },
    {
        image: catalogo3,
        title: 'SOLUCIONES EN MOTOR',
        subtitle: 'Todo lo que necesitas para mantener tus motores en marcha'
    }
];

export default function BannerCat() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Lógica del intervalo de tiempo (Limpia el intervalo al desmontar el componente)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Cambia cada 5 segundos (5000ms)

        return () => clearInterval(timer); // Limpieza crítica para evitar errores
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="banner-cat-container">
            {/* 1. Mapeo de Slides (Imágenes y Texto) */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="overlay">
                        <div className="content">
                            <h1>{slide.title}</h1>
                            <div className="separator"></div>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* 2. Indicadores Circulares (Los de la imagen) */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-circle ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        {/* El número dentro del círculo */}
                        <span className="circle-number">{index + 1}</span>
                        {/* El SVG para el anillo de progreso circular exacto */}
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path
                                className="circle-bg"
                                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="circle"
                                strokeDasharray={`${(index === currentSlide ? 100 : 0)}, 100`}
                                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                    </button>
                ))}
            </div>
        </div>
    );
}