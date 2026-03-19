import { FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import './footer.css';

const categoryLinks = ['Motores', 'Suspension', 'Frenos de Aire', 'Filtracion', 'Accesorios', 'Aire Acondicionado'];
const brandLinks    = ['Kenworth', 'Freightliner', 'Mercedes Benz', 'Mack', 'Volvo'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-fime">fime</span>
            <span className="footer__logo-rep">Repuestos</span>
          </div>
          <p className="footer__desc">
            Especialistas en repuestos para camiones y vehiculos de carga pesada.
            Calidad garantizada en cada pieza.
          </p>
          <div className="footer__social">
            <a href="#!" className="footer__social-link" aria-label="Instagram"><FiInstagram /></a>
            <a href="#!" className="footer__social-link" aria-label="Facebook"><FiFacebook /></a>
            <a href="#!" className="footer__social-link" aria-label="Twitter"><FiTwitter /></a>
          </div>
        </div>

        {/* Categories */}
        <div className="footer__col">
          <h4 className="footer__title">Categorias</h4>
          {categoryLinks.map((c) => (
            <a key={c} href="#productos" className="footer__link">{c}</a>
          ))}
        </div>

        {/* Brands */}
        <div className="footer__col">
          <h4 className="footer__title">Marcas</h4>
          {brandLinks.map((b) => (
            <a key={b} href="#marcas" className="footer__link">{b}</a>
          ))}
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__title">Contacto</h4>
          <div className="footer__contact-item">
            <FiPhone className="footer__contact-icon" />
            <span>+51 993 271 800</span>
          </div>
          <div className="footer__contact-item">
            <FiMail className="footer__contact-icon" />
            <span>ventas@fime-industrial.com</span>
          </div>
          <div className="footer__contact-item">
            <FiClock className="footer__contact-icon" />
            <span>Lun - Sab: 8am - 6pm</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Fime Repuestos. Todos los derechos reservados.</p>
        <p className="footer__bottom-sub">Repuestos para camiones y vehiculos de carga pesada</p>
      </div>
    </footer>
  );
}
