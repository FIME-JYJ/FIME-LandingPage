import { FiSettings, FiBox, FiTruck, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import './destacados.css';

const categories = [
  {
    name: 'Motor',
    icon: FiSettings,
    subcats: ['Cummins ISX', 'Cummins ISM', 'Mercedes Benz', 'Caterpillar'],
    image: null, // Espacio reservado para imagen
  },
  {
    name: 'Cabina',
    icon: FiBox,
    subcats: ['Asientos', 'Tablero', 'Aire Acondicionado', 'Vidrios'],
    image: null, // Espacio reservado para imagen
  },
  {
    name: 'Chasis',
    icon: FiTruck,
    subcats: ['Suspensión', 'Frenos', 'Transmisión', 'Ejes'],
    image: null, // Espacio reservado para imagen
  },
];

const products = [
  { id: 1, name: 'Kit de Empaque Cummins ISX', price: '$320.000', category: 'Motor',    tag: 'Nuevo',   icon: FiSettings },
  { id: 2, name: 'Asiento Conductor Kenworth', price: '$185.000', category: 'Cabina', tag: 'Popular', icon: FiBox },
  { id: 3, name: 'Amortiguador Delantero', price: '$95.000',  category: 'Chasis',     tag: 'Oferta',  icon: FiTruck },
  { id: 4, name: 'Turbo Cummins ISM', price: '$650.000',  category: 'Motor', tag: 'Nuevo',   icon: FiSettings },
  { id: 5, name: 'Tablero Internacional', price: '$450.000', category: 'Cabina',        tag: 'Popular', icon: FiBox },
  { id: 6, name: 'Sistema de Frenos Bendix', price: '$278.000',  category: 'Chasis', tag: null,      icon: FiTruck },
];

const tagColors = {
  Nuevo:   '#00aaff',
  Popular: '#1a2f6e',
  Oferta:  '#e63946',
};

export default function Destacados() {
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
            {categories.map(({ name, icon: Icon, subcats }) => (
              <div key={name} className="catcard">
                <div className="catcard__icon-wrap">
                  <Icon className="catcard__icon" />
                </div>
                <h3 className="catcard__name">{name}</h3>
                <ul className="catcard__list">
                  {subcats.map((s) => (
                    <li key={s}><a href="#productos">{s}</a></li>
                  ))}
                </ul>
                <a href="#productos" className="catcard__link">
                  Ver todos <FiArrowRight className="catcard__arrow" />
                </a>
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
            {products.map(({ id, name, price, category, tag, icon: Icon }) => (
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
                  <Icon className="prodcard__img-icon" />
                </div>
                <div className="prodcard__body">
                  <span className="prodcard__cat">{category}</span>
                  <h4 className="prodcard__name">{name}</h4>
                  <div className="prodcard__footer">
                    <span className="prodcard__price">{price}</span>
                    <button className="prodcard__btn">
                      <FiShoppingCart /> Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="center">
            <a href="#productos" className="btn-outline">
              Ver Todos los Productos <FiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
