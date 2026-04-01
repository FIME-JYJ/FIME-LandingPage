import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './catalogo.css';
import { FiGrid, FiTruck, FiCornerDownRight, FiGitPullRequest } from 'react-icons/fi';
import Buscador from '../buscador/buscador';
import MercedesBenzLogo from '../../img/MercedesBenz.png';
import camisasImg from '../../img/Catalogo/camisas.webp';
import canillerasImg from '../../img/Catalogo/canilleras.webp'
import escapeImg from '../../img/Catalogo/escape.webp';
import culataImg from '../../img/Catalogo/culata.webp';
import anillosImg from '../../img/Catalogo/anillos.webp'
import ciguelaImg from '../../img/Catalogo/ciguenal.webp'
import volanteImg from '../../img/Catalogo/volante.webp'
import bielaImg from '../../img/Catalogo/biela.webp'
import arbolImg from '../../img/Catalogo/arbol.webp'
import bombaImg from '../../img/Catalogo/bomba.webp'
import campanaImg from '../../img/Catalogo/campana.webp' 
import carterImg from '../../img/Catalogo/carter.webp' 
import setEmpaquesImg from '../../img/Catalogo/setEmpaques.webp' 
import kitEmpaquesImg from '../../img/Catalogo/kitEmpaques.webp' 
import volanteDetroitImg from '../../img/Catalogo/volanteDetroit.webp' 
import inyectorImg from '../../img/Catalogo/inyector.webp' 
import sensorImg from '../../img/Catalogo/sensor.webp' 
import turboImg from '../../img/Catalogo/turbo.webp' 
import bombaDetroitImg from '../../img/Catalogo/bombaDetroit.webp' 
import radiadorImg  from '../../img/Catalogo/radiador.webp' 

const vehiculos = [
    { id: 1, nombre: 'CAMISAS DE MOTOR Y ANILLOS ORIGINAL x6 unidad', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros',tipo: 'Original', imagen: camisasImg },
    { id: 2, nombre: 'JGO METAL BCDA.STD OM457', categoria: 'Motor ', marca: 'MAHLE', modelo: 'Actros',tipo: 'Original', imagen: canillerasImg },
    { id: 3, nombre: 'EMPAQUE DE ESCAPE', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor',tipo: 'Original', imagen: escapeImg },
    { id: 4, nombre: 'EMPAQUE DE CULATA', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor',tipo: 'Original', imagen: culataImg},
    { id: 5, nombre: 'ANILLOS DE MOTOR', categoria: 'Motor', marca: 'KSP', modelo: 'Cascadia',tipo: 'Original', imagen: anillosImg },
    { id: 6, nombre: 'CIGUENAL ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros',tipo: 'Original', imagen: ciguelaImg },
    { id: 7, nombre: 'VOLANTE DE INERCIA  CON CORONA DE ARRANQUE', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2',tipo: 'Original', imagen: volanteImg },
    { id: 8, nombre: 'BIELA', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2',tipo: 'Original', imagen: bielaImg },
    { id: 9, nombre: 'ARBOL DE EJE DE LEVAS', categoria: 'Motor', marca: 'Volvo', modelo: 'VN',tipo: 'Original', imagen: arbolImg },
    { id: 10, nombre: 'BOMBA DE COMBUSTIBLE', categoria: 'Motor', marca: 'Mack', modelo: 'Anthem',tipo: 'Original', imagen: bombaImg },
    { id: 11, nombre: 'CAMPANA DE DISTRIBUCION ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Axor',tipo: 'Original', imagen: campanaImg },
    { id: 12, nombre: 'CARTER COMPLETO DE MOTOR ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros',tipo: 'Alternativo', imagen: carterImg },
    { id: 13, nombre: 'SET DE EMPAQUES DE MOTOR ', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15',tipo: 'Alternativo', imagen: setEmpaquesImg },
    { id: 14, nombre: 'KIT EMPAQUE CULATA S-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60',tipo: 'Alternativo', imagen: kitEmpaquesImg },
    { id: 15, nombre: 'VOLANTE MOTOR S50-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60',tipo: 'Alternativo', imagen: volanteDetroitImg },
    { id: 16, nombre: 'INYECTOR COMPLETO S60 12L', categoria: 'Motor', marca: 'Detroit', modelo: 'S60',tipo: 'Alternativo', imagen: inyectorImg },
    { id: 17, nombre: 'SENSOR PRESION DE ACEITE', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15',tipo: 'Alternativo', imagen: sensorImg },
    { id: 18, nombre: 'TURBO S60 D4', categoria: 'Motor', marca: 'Detroit', modelo: 'S60',tipo: 'Alternativo', imagen: turboImg },
    { id: 19, nombre: 'BOMBA DE ACEITE  ORIGINAL', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15',tipo: 'Alternativo', imagen: bombaDetroitImg },
    { id: 20, nombre: 'BHT B4761 RADIADOR DE AGUA', categoria: 'Motor', marca: 'Detroit', modelo: 'M2', tipo: 'Alternativo', imagen: radiadorImg },

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
    const navigate = useNavigate();
    // Estado para los filtros del buscador
    const [filtros, setFiltros] = useState({ brand: '', category: '', term: '', model: '' });

    // Función que recibe los datos desde el componente Buscador
    const handleSearch = (nuevosFiltros) => {
        setFiltros(nuevosFiltros);
    };

    // Lógica de filtrado con los nuevos campos
    const vehiculosFiltrados = vehiculos.filter(v => {
        const matchBrand = !filtros.brand || v.marca === filtros.brand;
        const matchCategory = !filtros.category || v.categoria === filtros.category;
        const matchTerm = !filtros.term || v.nombre.toLowerCase().includes(filtros.term.toLowerCase());
        const matchModel = !filtros.model || v.modelo === filtros.model;

        return matchBrand && matchCategory && matchTerm && matchModel;
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
                                        <img src={v.imagen || MercedesBenzLogo} alt={v.nombre} />
                                    </div>
                                    <div className="vehicle-info">
                                        <span className="vehicle-tag">{v.categoria}</span>
                                        <h3>{v.nombre}</h3>
                                        <p className="vehicle-specs">Marca: {v.marca}</p>
                                        <p className="vehicle-specs">Modelo: {v.modelo}</p>

                                        <button
                                            className="vehicle-btn"
                                            onClick={() => {
                                                // Si es la primera pieza (id 1), mandamos al detalle
                                                if (v.id === 1) {
                                                    navigate(`/catalogo/${v.id}`);
                                                } else {
                                                    alert("Próximamente disponible");
                                                }
                                            }}
                                        >
                                            Ver Detalle
                                        </button>
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
