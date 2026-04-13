import { FiSettings, FiBox, FiTruck, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './destacados.css';
import camisasImg from '../../img/Catalogo/camisas.webp';
import anillosImg from '../../img/Catalogo/anillos.webp';
import turboImg from '../../img/Catalogo/turbo.webp';
import volanteImg from '../../img/Catalogo/volante.webp';
import bombaImg from '../../img/Catalogo/bomba.webp';
import radiadorImg from '../../img/Catalogo/radiador.webp';

const categories = [
  {
    name: 'Motor',
    icon: FiSettings,
    subcats: ['Cummins ISX', 'Cummins ISM', 'Mercedes Benz', 'Caterpillar'],
    image: '/img/Categories/motor.webp',
  },
  {
    name: 'Cabina',
    icon: FiBox,
    subcats: ['Asientos', 'Tablero', 'Aire Acondicionado', 'Vidrios'],
    image: '/img/Categories/cabina.webp',
  },
  {
    name: 'Chasis',
    icon: FiTruck,
    subcats: ['Suspensión', 'Frenos', 'Transmisión', 'Ejes'],
    image: '/img/Categories/chasis.webp',
  },
];

const products = [
  { id: 21, name: 'Turbo Cummins ISX Holset', category: 'Motor', tag: 'Nuevo', image: camisasImg },
  { id: 22, name: 'Kit de Embrague Eaton Fuller (15.5")', category: 'Transmisión', tag: 'Popular', image: volanteImg },
  { id: 23, name: 'Bolsa de Aire de Cabina / Chasis', category: 'Suspensión', tag: 'Oferta', image: bombaImg },
  { id: 24, name: 'Faros LED de Alta Definición', category: 'Eléctrico', tag: 'Nuevo', image: turboImg },
  { id: 25, name: 'Válvula Secadora de Aire (Bendix AD-IS)', category: 'Frenos', tag: 'Popular', image: radiadorImg },
  { id: 26, name: 'Asiento con Suspensión Neumática (Premium)', category: 'Cabina', tag: null, image: anillosImg },
];

const tagColors = {
  Nuevo:   '#00aaff',
  Popular: '#1a2f6e',
  Oferta:  '#e63946',
};

export default function Destacados() {
  const navigate = useNavigate();

  return (
    <>
      {/* Categorias */}
      <section id="productos" className="section categorias">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Categorias de Productos</h2>
            <div className="section-line" />
            <p className="section-sub">Encuentre el repuesto que necesita por categoria</p>
          </div>

          <div className="categorias__grid">
            {categories.map(({ name, image }) => (
              <div
                key={name}
                className="catcard"
                style={{ backgroundImage: `url(${image})`, cursor: 'pointer' }}
                onClick={() => navigate('/catalogo')}
              >
                <div className="catcard__overlay">
                  <div className="catcard__content">
                    <h3 className="catcard__name">{name}</h3>
                    <div className="catcard__arrow-btn">
                      <FiArrowRight className="catcard__arrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="section productos">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Productos Destacados</h2>
            <div className="section-line" />
          </div>

          <div className="productos__grid">
            {products.map(({ id, name, category, tag, image }) => (
              <div key={id} className="prodcard">
                {tag && (
                  <span
                    className="prodcard__tag"
                    style={{ background: tagColors[tag] }}
                  >
                    {tag}
                  </span>
                )}
                <div className="prodcard__img">
                  <img src={image} alt={name} />
                </div>
                <div className="prodcard__body">
                  <span className="prodcard__cat">{category}</span>
                  <h4 className="prodcard__name">{name}</h4>
                  <div className="prodcard__footer">
                    {/* Precio oculto en la tarjeta: se muestra en detalle */}
                    <button
                      className="prodcard__btn"
                      onClick={() => navigate(`/catalogo/${id}`)}
                    >
                      Ver Detalle
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="center">
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                const el = document.getElementById('productos');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                else window.location.hash = 'productos';
              }}
            >
              Ver Todos los Productos <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
