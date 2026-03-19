import React, { useState } from 'react';
import './catalogo.css';
import { FiGrid, FiTruck, FiCornerDownRight, FiGitPullRequest } from 'react-icons/fi';

const vehiculos = [
    { id: 1, nombre: 'Mercedes-Benz New Actros', tipo: 'Remolcador', hp: '450 HP', imagen: 'ruta/actros.jpg' },
    { id: 2, nombre: 'Freightliner New Cascadia', tipo: 'Remolcador', hp: '505 HP', imagen: 'ruta/cascadia.jpg' },
    { id: 3, nombre: 'Mercedes-Benz Atego 1726', tipo: 'Camión', hp: '256 HP', imagen: 'ruta/atego.jpg' },
    { id: 4, nombre: 'Nuevo Modelo Camión', tipo: 'Volquete', hp: '380 HP', imagen: 'ruta/nuevo-camion.jpg'},
    { id: 5, nombre: 'Freightliner M2 112', tipo: 'Camión', hp: '350 HP', imagen: 'ruta/frieghtliner-m2.jpg' },
    { id: 6, nombre: 'Mercedes-Benz Accelo 1016', tipo: 'Camión Ligero', hp: '156 HP', imagen: 'ruta/accelo-1016.jpg' },
    { id: 7, nombre: 'Mercedes-Benz Axor 3131', tipo: 'Mezclador', hp: '306 HP', imagen: 'ruta/axor-3131.jpg' },
    { id: 8, nombre: 'Freightliner 114SD', tipo: 'Volquete', hp: '400 HP', imagen: 'ruta/freightliner-114sd.jpg' },
    { id: 9, nombre: 'Mercedes-Benz New Actros 2651', tipo: 'Remolcador', hp: '510 HP', imagen: 'ruta/actros-2651.jpg' },
    { id: 10, nombre: 'Mercedes-Benz Atego 2730', tipo: 'Cisterna', hp: '286 HP', imagen: 'ruta/atego-2730.jpg' },
    { id: 11, nombre: 'Mercedes-Benz New Actros 2653 LS', tipo: 'Remolcador', hp: '530 HP', imagen: 'ruta/actros-2653.jpg' },
    { id: 12, nombre: 'Freightliner M2 106 Business Class', tipo: 'Camion', hp: '220 HP', imagen: 'ruta/m2-106.jpg' },
    { id: 13, nombre: 'Mercedes-Benz Arocs 4145K', tipo: 'Volquete', hp: '450 HP', imagen: 'ruta/arocs-4145.jpg' },
    { id: 14, nombre: 'Mercedes-Benz Atego 2430', tipo: 'Camion', hp: '300 HP', imagen: 'ruta/atego-2430.jpg'},
    { id: 15, nombre: 'Freightliner New Cascadia Sleeper', tipo: 'Remolcador', hp: '525 HP', imagen: 'ruta/cascadia-sleeper.jpg' },
    { id: 16, nombre: 'Mercedes-Benz Accelo 1316', tipo: 'Camion', hp: '160 HP', imagen: 'ruta/accelo-1316.jpg' },
    { id: 17, nombre: 'Mercedes-Benz Axor 2644', tipo: 'Remolcador', hp: '439 HP', imagen: 'ruta/axor-2644.jpg' },
    { id: 18, nombre: 'Mercedes-Benz Arocs 4851K', tipo: 'Volquete', hp: '510 HP', imagen: 'ruta/arocs-4851.jpg' },
    { id: 19, nombre: 'Freightliner M2 112 Mixer', tipo: 'Mezclador', hp: '350 HP', imagen: 'ruta/m2-mixer.jpg' },
    { id: 20, nombre: 'Mercedes-Benz Atego 1419', tipo: 'Camion', hp: '190 HP', imagen: 'ruta/atego-1419.jpg' }
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
    // Estado para saber qué pestaña está activa
    const [filtroActivo, setFiltroActivo] = useState('todos');

    // Lógica de filtrado
    const vehiculosFiltrados = filtroActivo === 'todos'
        ? vehiculos
        : vehiculos.filter(v => v.tipo === filtroActivo);

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
            <div className="container">

                {/* NUEVA BARRA DE FILTROS SUPERIOR (Diseño de Pestañas) */}
                <div className="catalogo-tabs-bar">
                    <div className="tabs-container">
                        {categorias.map(cat => (
                            <button
                                key={cat.id}
                                className={`tab-btn ${filtroActivo === cat.id ? 'active' : ''}`}
                                onClick={() => setFiltroActivo(cat.id)}
                            >
                                {cat.icon}
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className="results-count">
                        <strong>{vehiculosFiltrados.length}</strong> unidades encontradas
                    </div>
                </div>

                {/* CONTENIDO PRINCIPAL (Solo la cuadrícula) */}
                <main className="catalogo-main">
                    <div className="catalogo-grid">
                        {vehiculosFiltrados.map(v => (
                            <div key={v.id} className="vehicle-card">
                                <div className="vehicle-img">
                                    <img src={v.imagen} alt={v.nombre} />
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
                </main>

            </div>
        </div>
    );
}