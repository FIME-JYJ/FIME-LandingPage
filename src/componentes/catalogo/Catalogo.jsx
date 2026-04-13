import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './catalogo.css';
import Buscador from '../buscador/buscador';
import BannerCat from '../bannerCat/bannerCat';
import MercedesBenzLogo from '../../img/MercedesBenz.png';
import vehiculos from '../../vehiculos';

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
            <BannerCat />

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

                                        {/* Precio y descripción removidos para que solo aparezcan en la vista detalle */}

                                        <button
                                            className="vehicle-btn"
                                            onClick={() => navigate(`/catalogo/${v.id}`)}
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
