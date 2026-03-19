import { FiSettings, FiDisc, FiSliders, FiFilter, FiWind, FiTool,  FiArrowRight } from 'react-icons/fi';
import './destacados.css';

const categories = [
  {
    name: 'Motores',
    icon: FiSettings,
    subcats: ['Cummins ISX', 'Cummins ISM', 'Mercedes Benz'],
  },
  {
    name: 'Suspension',
    icon: FiDisc,
    subcats: ['Amortiguadores', 'Bujes', 'Rodamientos'],
  },
  {
    name: 'Frenos de Aire',
    icon: FiSliders,
    subcats: ['Valvulas', 'Bendix', 'Compresores'],
  },
  {
    name: 'Filtracion',
    icon: FiFilter,
    subcats: ['Filtros de Aceite', 'Filtros de Aire', 'Filtros Combustible'],
  },
  {
    name: 'Aire Acondicionado',
    icon: FiWind,
    subcats: ['Condensador', 'Compresor A/C', 'Evaporador'],
  },
  {
    name: 'Accesorios',
    icon: FiTool,
    subcats: ['Correas', 'Tensores', 'Sensores'],
  },
];

const products = [
  { id: 1, name: 'Kit de Empaque Cummins ISX', price: '$320.000', category: 'Motores',    tag: 'Nuevo',   icon: FiSettings },
  { id: 2, name: 'Amortiguador Delantero Kenworth', price: '$185.000', category: 'Suspension', tag: 'Popular', icon: FiDisc },
  { id: 3, name: 'Valvula Relay Bendix R-12', price: '$95.000',  category: 'Frenos',     tag: 'Oferta',  icon: FiSliders },
  { id: 4, name: 'Filtro de Aire Primario Freightliner', price: '$65.000',  category: 'Filtracion', tag: 'Nuevo',   icon: FiFilter },
  { id: 5, name: 'Compresor A/C International', price: '$450.000', category: 'A/C',        tag: 'Popular', icon: FiWind },
  { id: 6, name: 'Rodamiento Rueda Trasera', price: '$78.000',  category: 'Suspension', tag: null,      icon: FiDisc },
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
