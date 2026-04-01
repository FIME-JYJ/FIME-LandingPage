import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiSettings, FiTruck } from 'react-icons/fi';
import './DetallePieza.css';

// Importa la imagen de la primera pieza
import camisasImg from '../../img/Catalogo/camisas.webp';

export default function DetallePieza() {
    const navigate = useNavigate();

    // Datos de prueba para la primera pieza
    const pieza = {
        nombre: 'CAMISAS DE MOTOR Y ANILLOS ORIGINAL x6 unidad',
        categoria: 'Motor',
        marca: 'Mercedes Benz',
        modelo: 'Actros',
        tipo: 'Original',
        imagen: camisasImg,
        descripcion: 'Este kit original de 6 camisas y anillos está diseñado para motores de 6 cilindros, asegurando un sellado de combustión óptimo, reduciendo la fricción y disipando el calor.'
    };

    return (
        <div className="detalle-page">
            <div className="container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> Volver al catálogo
                </button>

                <div className="detalle-main-content">
                    <div className="detalle-img">
                        <img src={pieza.imagen} alt={pieza.nombre} />
                    </div>

                    <div className="detalle-header-info">
                        <span className="tag-original">{pieza.tipo}</span>
                        <h1>{pieza.nombre}</h1>
                        <p className="detalle-descripcion">{pieza.descripcion}</p>

                        <div className="action-area">
                            <p className="price-tag">Precio: Consultar</p>
                            <button className="btn-cotizar">Solicitar Cotización</button>
                        </div>
                    </div>
                </div>

                <div className="detalle-additional-info">
                    <h2>Información Adicional</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <span>Categoría</span>
                            <strong>{pieza.categoria}</strong>
                        </div>
                        <div className="spec-item">
                            <span>Marca</span>
                            <strong>{pieza.marca}</strong>
                        </div>
                        <div className="spec-item">
                            <span>Modelo</span>
                            <strong>{pieza.modelo}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}