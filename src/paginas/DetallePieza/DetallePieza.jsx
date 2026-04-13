import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './DetallePieza.css';

import vehiculos from '../../vehiculos';

export default function DetallePieza() {
    const navigate = useNavigate();
    const { id } = useParams();

    // Buscar la pieza por id en el array centralizado
    const pieza = vehiculos.find(p => String(p.id) === String(id));

    if (!pieza) {
        return (
            <div className="detalle-page">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        <FiArrowLeft /> Volver al catálogo
                    </button>
                    <div style={{ padding: 40, textAlign: 'center' }}>
                        <h2>Producto no encontrado</h2>
                        <p>Lo sentimos, no encontramos la pieza solicitada.</p>
                    </div>
                </div>
            </div>
        );
    }

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
                            <p className="price-tag">Precio: {pieza.precio ? `$${pieza.precio.toLocaleString()}` : 'Consultar'}</p>
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