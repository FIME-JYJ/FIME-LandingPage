import { useState, useEffect } from 'react';
import {
  FiPhone, FiMail, FiClock, FiShoppingCart,
  FiMenu, FiX, FiChevronDown
} from 'react-icons/fi';
import './navbar.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Motores',
    subcats: ['Cummins ISX', 'Cummins ISM', 'Mercedes Benz', 'Mack', 'Paccar'],
  },
  {
    name: 'Suspensión',
    subcats: ['Amortiguadores', 'Bujes', 'Rodamientos', 'Dirección', 'Soportes'],
  },
  {
    name: 'Frenos de Aire',
    subcats: ['Válvulas', 'Bendix', 'ABS', 'Compresores', 'Empaquetaduras'],
  },
  {
    name: 'Filtración',
    subcats: ['Filtros de Aceite', 'Filtros de Aire', 'Filtros de Combustible'],
  },
  {
    name: 'Aire Acondicionado',
    subcats: ['Condensador', 'Compresor A/C', 'Evaporador'],
  },
  {
    name: 'Accesorios',
    subcats: ['Correas', 'Tensores', 'Sensores', 'Lubricantes'],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <FiPhone className="topbar__icon" /> +57 310 000 0000
          </span>
          <span className="topbar__item">
            <FiMail className="topbar__icon" /> ventas@fimerepuestos.com
          </span>
          <span className="topbar__item">
            <FiClock className="topbar__icon" /> Lun - Sáb: 8am - 6pm
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header${scrolled ? ' header--sticky' : ''}`}>
        <div className="container header__inner">

          {/* Logo */}
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <span className="logo__fime">fime</span>
            <span className="logo__rep">+Repuestos</span>
          </Link>

          {/* Nav */}
          <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
            <Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/catalogo" className="nav__link" onClick={() => setMenuOpen(false)}>Catálogo</Link>
            <div
              className="nav__dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/#productos" className="nav__link nav__link--arrow" onClick={() => { setMenuOpen(false); setDropdownOpen(true); }}>
                Repuestos <FiChevronDown className="nav__chevron" />
              </Link>
              {dropdownOpen && (
                <div className="mega">
                  <div className="container mega__grid">
                    {categories.map((cat) => (
                      <div key={cat.name} className="mega__col">
                        <p className="mega__title">{cat.name}</p>
                        {cat.subcats.map((sub) => (
                          <Link
                            key={sub}
                            to="/#productos"
                            className="mega__item"
                            onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/#marcas" className="nav__link" onClick={() => setMenuOpen(false)}>Marcas</Link>
            <Link to="/#nosotros" className="nav__link" onClick={() => setMenuOpen(false)}>Quiénes Somos</Link>
            <Link to="/#contacto" className="nav__link" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <button className="cart">
              <FiShoppingCart className="cart__icon" />
              <span className="cart__badge">0</span>
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>

        </div>
      </header>


    </>
  );
}
