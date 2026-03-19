import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './buscador.css';

const brands = [
  'Kenworth', 'Freightliner', 'International', 'Mercedes Benz',
  'Mack', 'Volvo',
];

const types = [
  'Motor', 'Cabina', 'Chasis', 'Suspensión', 'Transmisión'
];

export default function Buscador({ onSearch }) {
  const [term, setTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch({ brand, category, term });
    }
  };

  return (
    <section className="buscador">
      <div className="container">
        <div className="buscador__box">
          <h2 className="buscador__title">
            <FiSearch className="buscador__title-icon" /> Buscar Piezas
          </h2>
          <div className="buscador__row">
            <select
              className="buscador__select"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Seleccionar Marca</option>
              {brands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>

            <select
              className="buscador__select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccionar Categoría</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>

            <input
              className="buscador__input"
              type="text"
              placeholder="Referencia o nombre del repuesto..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
            />

            <button className="buscador__btn" onClick={handleSearchClick}>
              <FiSearch className="buscador__btn-icon" /> Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}