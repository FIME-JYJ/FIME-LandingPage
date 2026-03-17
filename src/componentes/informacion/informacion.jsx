import { FiCheckCircle } from 'react-icons/fi';
import './informacion.css';

import FreightlinerLogo from '../../img/Freightliner.png';

import InternacionalLogo from '../../img/Internacional.png';
import KenworthLogo from '../../img/Kenworth.jpg';
import MackLogo from '../../img/Mack.jpg';
import MercedesBenzLogo from '../../img/MercedesBenz.png';
import VolvoLogo from '../../img/Volvo.webp';
import WesternStarLogo from '../../img/WesternStar.png';

const brands = [
    { name: 'FreightLiner', logo: FreightlinerLogo, className: 'freightliner-logo' },
    { name: 'Internacional', logo: InternacionalLogo },
    { name: 'Kenworth', logo: KenworthLogo },
    { name: 'Mack', logo: MackLogo },
    { name: 'Mercedes Benz', logo: MercedesBenzLogo },
    { name: 'Volvo', logo: VolvoLogo, className: 'volvo-logo' },
    { name: 'Western Star', logo: WesternStarLogo },
];

const features = [
  'Productos originales y alternativos certificados',
  'Asesoria tecnica especializada sin costo',
  'Garantia en todos nuestros productos',
  'Envios a todo el pais con entrega express',
];

export default function Informacion() {
  return (
    <>
      {/* Marcas */}
      <section id="marcas" className="marcas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Marcas que Manejamos</h2>
            <div className="section-line" />
          </div>
        </div>
        <div className="marcas__track-wrap">
          <div className="marcas__track">
            {[...brands, ...brands].map((b, i) => (
              <div key={`${b.name}-${i}`} className="marcas__chip">
                  <img
                  src={b.logo}      /* Usa la imagen importada */
                  alt={b.name}      /* Usa el nombre como texto alternativo */
                  className={`marcas__logo-img ${b.className || ''}`} /* Clase para darle tamaño en el CSS */
              />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quienes Somos */}
      <section id="nosotros" className="section about">
        <div className="container about__inner">

          <div className="about__text">
            <h2 className="section-title">Quienes Somos</h2>
            <div className="section-line" style={{ margin: '0 0 20px 0' }} />
            <p className="about__p">
              <strong>Fime Repuestos</strong> es una empresa especializada en la distribucion y
              venta de repuestos para camiones y vehiculos de carga pesada. Con mas de 15 años de
              experiencia en el mercado, ofrecemos productos de la mas alta calidad a los mejores
              precios del mercado nacional.
            </p>
            <p className="about__p">
              Contamos con un amplio inventario de mas de 10,000 referencias en stock, garantizando
              disponibilidad inmediata y entrega rapida a todo el territorio nacional. Trabajamos
              con las principales marcas del sector automotriz pesado.
            </p>

            <ul className="about__features">
              {features.map((f) => (
                <li key={f} className="about__feature">
                  <FiCheckCircle className="about__check" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__visual">
            <div className="about__card">
              <div className="about__logo">
                <span className="about__logo-fime">fime</span>
                <span className="about__logo-rep">+Repuestos</span>
              </div>
              <div className="about__stats-mini">
                <div className="about__stat">
                  <span className="about__stat-num">15+</span>
                  <span className="about__stat-lbl">Años</span>
                </div>
                <div className="about__stat-divider" />
                <div className="about__stat">
                  <span className="about__stat-num">10k+</span>
                  <span className="about__stat-lbl">Refs</span>
                </div>
                <div className="about__stat-divider" />
                <div className="about__stat">
                  <span className="about__stat-num">500+</span>
                  <span className="about__stat-lbl">Clientes</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
