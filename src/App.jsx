import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar/navbar';
import Principal from './componentes/principal/principal.jsx';
import Destacados from './componentes/destacados/destacados';
import Informacion from './componentes/informacion/informacion';
import Contacto from './componentes/contacto/contacto';
import Footer from './componentes/footer/footer';
import ScrollToTop from './componentes/scroll-to-top/ScrollToTop';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Catalogo from './componentes/catalogo/Catalogo';
import WhatsAppButton from './componentes/whatsapp/whatsapp';

// Aquí definimos la "Página Nueva" del Catálogo
function PaginaCatalogo() {
    return (
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h1>Catálogo de Vehículos</h1>
            <p>Aquí puedes poner la cuadrícula de camiones como la de Divemotor.</p>
            {/* Luego moveremos la lógica de los camiones aquí */}
        </div>
    );
}

// Componente que se ubica dentro del Router y se encarga de hacer scroll cuando hay un hash
function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        // Si hay un hash (ej: /#productos) intentamos hacer scroll al elemento con ese id
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // Delay mínimo para permitir que el DOM renderice el contenido
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    // Si no existe el elemento, llevamos al top por defecto
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 50);
        } else {
            // Sin hash, llevamos al inicio de la página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname, location.hash]);

    return null;
}

export default function App() {
    return (
        <Router>
            <ScrollToHash />
            <Navbar />
            <Routes>
                {/* RUTA 1: La página principal que ya tienes */}
                <Route path="/" element={
                    <>
                        <Principal />
                        <Destacados />
                        <Informacion />
                        <Contacto />
                        <Footer />
                        <WhatsAppButton />
                    </>
                } />

                {/* RUTA 2: La página nueva del catálogo */}
                <Route path="/catalogo" element={<Catalogo />} />
            </Routes>
            <ScrollToTop />
        </Router>
    );
}