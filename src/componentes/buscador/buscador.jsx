import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './buscador.css';

const brands = [
  'Kenworth', 'Freightliner', 'International', 'Mercedes Benz',
  'Mack', 'Volvo',
];

const categories = [
  'Motores', 'Suspensión', 'Frenos de Aire',
  'Filtración', 'Aire Acondicionado', 'Accesorios',
];

export default function Buscador() {
  const [term, setTerm] = useState('');

  return (
    <section className="buscador">
      <div className="container">
        <div className="buscador__box">
          <h2 className="buscador__title">
            <FiSearch className="buscador__title-icon" /> Buscar Piezas
          </h2>
          <div className="buscador__row">
            <select className="buscador__select">
              <option value="">Seleccionar Marca</option>
              {brands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>

            <select className="buscador__select">
              <option value="">Categoria</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>

            <input
              className="buscador__input"
              type="text"
              placeholder="Referencia o nombre del repuesto..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />

            <button className="buscador__btn">
              <FiSearch className="buscador__btn-icon" /> Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
