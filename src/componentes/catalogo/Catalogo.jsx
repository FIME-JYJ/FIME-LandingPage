import React, { useState } from 'react';
import './catalogo.css';
import { FiGrid, FiTruck, FiCornerDownRight, FiGitPullRequest } from 'react-icons/fi';
import Buscador from '../buscador/buscador';
import MercedesBenzLogo from '../../img/MercedesBenz.png';


const vehiculos = [
    { id: 1, nombre: 'Kit de Motor Mercedes-Benz OM 460', tipo: 'Motor', marca: 'Mercedes Benz', hp: '450 HP', imagen: 'img/MercedesBenz.png' },
    { id: 2, nombre: 'Cabina Extendida Freightliner Cascadia', tipo: 'Cabina', marca: 'Freightliner', hp: 'N/A', imagen: 'ruta/cabina-cascadia.jpg' },
    { id: 3, nombre: 'Vigas de Chasis Reforzado Atego', tipo: 'Chasis', marca: 'Mercedes Benz', hp: 'N/A', imagen: 'ruta/chasis-atego.jpg' },
    { id: 4, nombre: 'Paquete de Ballestas Traseras Heavy ', tipo: 'Suspensión', marca: 'International', hp: 'N/A', imagen: 'ruta/suspension-volquete.jpg'},
    { id: 5, nombre: 'Transmisión Eaton Fuller 18 ', tipo: 'Transmisión', marca: 'Kenworth', hp: 'N/A', imagen: 'ruta/transmision-m2.jpg' },
    { id: 6, nombre: 'Turboalimentador Holset Accelo 1016', tipo: 'Motor', marca: 'Mercedes Benz', hp: '156 HP', imagen: 'ruta/motor-accelo.jpg' },
    { id: 7, nombre: 'Soporte de Cabina Neumático Axor', tipo: 'Cabina', marca: 'Mercedes Benz', hp: 'N/A', imagen: 'ruta/cabina-axor.jpg' },
    { id: 8, nombre: 'Travesaños de Chasis 114SD', tipo: 'Chasis', marca: 'Freightliner', hp: 'N/A', imagen: 'ruta/chasis-114sd.jpg' },
    { id: 9, nombre: 'Amortiguadores Delanteros FH16', tipo: 'Suspensión', marca: 'Volvo', hp: 'N/A', imagen: 'ruta/suspension-actros.jpg' },
    { id: 10, nombre: 'Caja de Cambios mDrive 12 vel.', tipo: 'Transmisión', marca: 'Mack', hp: 'N/A', imagen: 'ruta/transmision-atego.jpg' },
    { id: 11, nombre: 'Culata de Cilindros Actros 2653 LS', tipo: 'Motor', marca: 'Mercedes Benz', hp: '530 HP', imagen: 'ruta/motor-actros-2653.jpg' },
    { id: 12, nombre: 'Puerta Derecha Completa M2 Business', tipo: 'Cabina', marca: 'Freightliner', hp: 'N/A', imagen: 'ruta/cabina-m2.jpg' },
    { id: 13, nombre: 'Quinta Rueda Jost para Chasis Arocs', tipo: 'Chasis', marca: 'Mercedes Benz', hp: 'N/A', imagen: 'ruta/chasis-arocs.jpg' },
    { id: 14, nombre: 'Bolsas de Aire de Suspensión WorkStar', tipo: 'Suspensión', marca: 'International', hp: 'N/A', imagen: 'ruta/suspension-atego-2430.jpg'},
    { id: 15, nombre: 'Kit de Embrague Reforzado Cascadia', tipo: 'Transmisión', marca: 'Freightliner', hp: 'N/A', imagen: 'ruta/transmision-cascadia.jpg' },
    { id: 16, nombre: 'Bomba de Inyección Diésel T880', tipo: 'Motor', marca: 'Kenworth', hp: '160 HP', imagen: 'ruta/motor-accelo-1316.jpg' },
    { id: 17, nombre: 'Asiento de Conductor con Suspensión ', tipo: 'Cabina', marca: 'Mack', hp: 'N/A', imagen: 'ruta/cabina-axor-2644.jpg' },
    { id: 18, nombre: 'Eje Delantero Rígido Volvo VNR', tipo: 'Chasis', marca: 'Volvo', hp: 'N/A', imagen: 'ruta/chasis-arocs-4851.jpg' },
    { id: 19, nombre: 'Barra Estabilizadora M2 Mixer', tipo: 'Suspensión', marca: 'Freightliner', hp: 'N/A', imagen: 'ruta/suspension-mixer.jpg' },
    { id: 20, nombre: 'Diferencial Trasero de Alta Tracción', tipo: 'Transmisión', marca: 'International', hp: 'N/A', imagen: 'ruta/transmision-atego-1419.jpg' }

    // Agrega más vehículos aquí
];

const categorias = [
    { id: 'todos', label: 'Todos', icon: <FiGrid /> },
    { id: 'Remolcador', label: 'Remolcadores', icon: <FiTruck /> },
    { id: 'Camion', label: 'Camiones', icon: <FiCornerDownRight /> },
    { id: 'Volquete', label: 'Volquetes', icon: <FiTruck /> }, // Puedes cambiar el icono
    { id: 'Mezclador', label: 'Mezcladores', icon: <FiGitPullRequest /> },
];
export default function Catalogo() {
    // Estado para los filtros del buscador
    const [filtros, setFiltros] = useState({ brand: '', category: '', term: '' });

    // Función que recibe los datos desde el componente Buscador
    const handleSearch = (nuevosFiltros) => {
        setFiltros(nuevosFiltros);
    };

    // Lógica de filtrado con los nuevos campos
    const vehiculosFiltrados = vehiculos.filter(v => {
        const matchBrand = !filtros.brand || v.marca === filtros.brand;
        const matchCategory = !filtros.category || v.tipo === filtros.category;
        const matchTerm = !filtros.term || v.nombre.toLowerCase().includes(filtros.term.toLowerCase());

        return matchBrand && matchCategory && matchTerm;
    });

    return (
        <div className="catalogo-page">
            <div className="catalogo-hero">
                <div className="catalogo-hero__overlay">
                    <div className="container">
                        <h1 className="catalogo-hero__title">Catálogo de Repuestos</h1>
                        <p className="catalogo-hero__subtitle">
                            Encuentra la potencia y confiabilidad que tu negocio necesita
                        </p>
                    </div>
                </div>
            </div>

            {/* Pasamos la función handleSearch al Buscador */}
            <Buscador onSearch={handleSearch} />

            <div className="container">


                {/* CONTENIDO PRINCIPAL (Solo la cuadrícula) */}
                <main className="catalogo-main">
                    {vehiculosFiltrados.length > 0 ? (
                        <div className="catalogo-grid">
                            {vehiculosFiltrados.map(v => (
                                <div key={v.id} className="vehicle-card">
                                    <div className="vehicle-img">
                                        <img src={MercedesBenzLogo} alt={v.nombre} />
                                    </div>
                                    <div className="vehicle-info">
                                        <span className="vehicle-tag">{v.tipo}</span>
                                        <h3>{v.nombre}</h3>
                                        <p className="vehicle-specs">Potencia: {v.hp}</p>
                                        <button className="vehicle-btn">Ver Detalle</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <h3>¡Stock Vacío!</h3>
                            <p>No encontramos repuestos con esos criterios.</p>
                        </div>
                    )}
                </main>

            </div>
        </div>
    );
}
