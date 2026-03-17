import Navbar from './componentes/navbar/navbar';
import Principal from './componentes/principal/principal';
import Buscador from './componentes/buscador/buscador';
import Destacados from './componentes/destacados/destacados';
import Informacion from './componentes/informacion/informacion.jsx';
import Contacto from './componentes/contacto/contacto';
import Footer from './componentes/footer/footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Principal />
      <Buscador />
      <Destacados />
      <Informacion />
      <Contacto />
      <Footer />
    </div>
  );
}
