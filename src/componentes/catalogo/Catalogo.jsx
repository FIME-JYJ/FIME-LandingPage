import React, { useState } from 'react';
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
    { id: 1, nombre: 'CAMISAS DE MOTOR Y ANILLOS ORIGINAL MERCEDES BENZ  x6 unidad', tipo: 'Motor MERCEDES BENZ', marca: 'Mercedes Benz', hp: 'N/A', imagen: camisasImg },
    { id: 2, nombre: 'Canilleras JGO METAL BCDA.STD OM457 MARCA MAHLE', tipo: 'Motor MERCEDES BENZ', marca: 'MAHLE', hp: 'N/A', imagen: canillerasImg },
    { id: 3, nombre: 'EMPAQUE DE ESCAPE MARCA ELRI', tipo: 'Motor MERCEDES BENZ', marca: 'ELRI', hp: 'N/A', imagen: escapeImg },
    { id: 4, nombre: 'EMPAQUE DE CULATA MARCA ELRI ', tipo: 'Motor MERCEDES BENZ', marca: 'ELRI', hp: 'N/A', imagen: culataImg},
    { id: 5, nombre: 'ANILLOS DE MOTOR MARCA KSP ', tipo: 'Motor MERCEDES BENZ', marca: 'KSP', hp: 'N/A', imagen: anillosImg },
    { id: 6, nombre: 'CIGUENAL ORIGINAL', tipo: 'Motor MERCEDES BENZ', marca: 'Mercedes Benz', hp: '156 HP', imagen: ciguelaImg },
    { id: 7, nombre: 'VOLANTE DE INERCIA  CON CORONA DE ARRANQUE', tipo: 'Motor MERCEDES BENZ', marca: 'Mercedes Benz', hp: 'N/A', imagen: volanteImg },
    { id: 8, nombre: 'BIELA', tipo: 'Motor MERCEDES BENZ', marca: 'Mercedes Benz', hp: 'N/A', imagen: bielaImg },
    { id: 9, nombre: 'ARBOL DE EJE DE LEVAS', tipo: 'Motor MERCEDES BENZ', marca: 'Volvo', hp: 'N/A', imagen: arbolImg },
    { id: 10, nombre: 'BOMBA DE COMBUSTIBLE', tipo: 'Motor MERCEDES BENZ', marca: 'Mack', hp: 'N/A', imagen: bombaImg },
    { id: 11, nombre: 'CAMPANA DE DISTRIBUCION ORIGINAL', tipo: 'Motor MERCEDES BENZ', marca: 'Mercedes Benz', hp: '530 HP', imagen: campanaImg },
    { id: 12, nombre: 'CARTER COMPLETO DE MOTOR ORIGINAL', tipo: 'Motor MERCEDES BENZ', marca: 'Freightliner', hp: 'N/A', imagen: carterImg },
    { id: 13, nombre: 'SET DE EMPAQUES DE MOTOR DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Mercedes Benz', hp: 'N/A', imagen: setEmpaquesImg },
    { id: 14, nombre: 'KIT EMPAQUE CULATA S-60  DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'International', hp: 'N/A', imagen: kitEmpaquesImg },
    { id: 15, nombre: 'VOLANTE MOTOR S50-60  DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Freightliner', hp: 'N/A', imagen: volanteDetroitImg },
    { id: 16, nombre: 'INYECTOR COMPLETO S60 12L DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Kenworth', hp: '160 HP', imagen: inyectorImg },
    { id: 17, nombre: 'SENSOR PRESION DE ACEITE  DETROIT ', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Mack', hp: 'N/A', imagen: sensorImg },
    { id: 18, nombre: 'TURBO S60 D4 DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Volvo', hp: 'N/A', imagen: turboImg },
    { id: 19, nombre: 'BOMBA DE ACEITE  ORIGINAL  DETROIT', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'Freightliner', hp: 'N/A', imagen: bombaDetroitImg },
    { id: 20, nombre: 'BHT B4761 RADIADOR DE AGUA PARA M2 112 / CL 112 / CL 120', tipo: 'MOTOR DETROIT SERIE 60 DD13', marca: 'International', hp: 'N/A', imagen: radiadorImg },

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
                                        <img src={v.imagen || MercedesBenzLogo} alt={v.nombre} />
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
