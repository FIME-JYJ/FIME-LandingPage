// Centraliza los datos de las piezas para usarlos en Catalogo, Destacados y DetallePieza
import camisasImg from './img/Catalogo/camisas.webp';
import canillerasImg from './img/Catalogo/canilleras.webp';
import escapeImg from './img/Catalogo/escape.webp';
import culataImg from './img/Catalogo/culata.webp';
import anillosImg from './img/Catalogo/anillos.webp';
import ciguelaImg from './img/Catalogo/ciguenal.webp';
import volanteImg from './img/Catalogo/volante.webp';
import bielaImg from './img/Catalogo/biela.webp';
import arbolImg from './img/Catalogo/arbol.webp';
import bombaImg from './img/Catalogo/bomba.webp';
import campanaImg from './img/Catalogo/campana.webp';
import carterImg from './img/Catalogo/carter.webp';
import setEmpaquesImg from './img/Catalogo/setEmpaques.webp';
import kitEmpaquesImg from './img/Catalogo/kitEmpaques.webp';
import volanteDetroitImg from './img/Catalogo/volanteDetroit.webp';
import inyectorImg from './img/Catalogo/inyector.webp';
import sensorImg from './img/Catalogo/sensor.webp';
import turboImg from './img/Catalogo/turbo.webp';
import bombaDetroitImg from './img/Catalogo/bombaDetroit.webp';
import radiadorImg from './img/Catalogo/radiador.webp';

const vehiculos = [
    { id: 1, nombre: 'CAMISAS DE MOTOR Y ANILLOS ORIGINAL x6 unidad', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Original', imagen: camisasImg, precio: 320000, descripcion: 'Este kit original de 6 camisas y anillos está diseñado para motores de 6 cilindros, asegurando un sellado de combustión óptimo, reduciendo la fricción y disipando el calor.', tag: 'Nuevo' },
    { id: 2, nombre: 'JGO METAL BCDA.STD OM457', categoria: 'Motor', marca: 'MAHLE', modelo: 'Actros', tipo: 'Original', imagen: canillerasImg, precio: 240000, descripcion: 'Juego de metales de bancada y biela para OM457.', tag: 'Popular' },
    { id: 3, nombre: 'EMPAQUE DE ESCAPE', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor', tipo: 'Original', imagen: escapeImg, precio: 45000, descripcion: 'Empaque de escape de alta resistencia térmica.', tag: 'Oferta' },
    { id: 4, nombre: 'EMPAQUE DE CULATA', categoria: 'Motor', marca: 'ELRI', modelo: 'Axor', tipo: 'Original', imagen: culataImg, precio: 180000, descripcion: 'Empaque de culata reforzado para motores diesel.', tag: 'Nuevo'},
    { id: 5, nombre: 'ANILLOS DE MOTOR', categoria: 'Motor', marca: 'KSP', modelo: 'Cascadia', tipo: 'Original', imagen: anillosImg, precio: 320000, descripcion: 'Anillos de pistón de alta durabilidad.', tag: 'Popular' },
    { id: 6, nombre: 'CIGUENAL ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Original', imagen: ciguelaImg, precio: 900000, descripcion: 'Cigüeñal equilibrado y rectificado.', tag: null },
    { id: 7, nombre: 'VOLANTE DE INERCIA  CON CORONA DE ARRANQUE', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2', tipo: 'Original', imagen: volanteImg, precio: 420000, descripcion: 'Volante de inercia con corona original.' },
    { id: 8, nombre: 'BIELA', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'M2', tipo: 'Original', imagen: bielaImg, precio: 150000, descripcion: 'Biela forjada de alto rendimiento.' },
    { id: 9, nombre: 'ARBOL DE EJE DE LEVAS', categoria: 'Motor', marca: 'Volvo', modelo: 'VN', tipo: 'Original', imagen: arbolImg, precio: 380000, descripcion: 'Árbol de levas con tratamiento superficial.' },
    { id: 10, nombre: 'BOMBA DE COMBUSTIBLE', categoria: 'Motor', marca: 'Mack', modelo: 'Anthem', tipo: 'Original', imagen: bombaImg, precio: 260000, descripcion: 'Bomba de combustible de alta presión.' },
    { id: 11, nombre: 'CAMPANA DE DISTRIBUCION ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Axor', tipo: 'Original', imagen: campanaImg, precio: 110000, descripcion: 'Campana de distribución original Mercedes.' },
    { id: 12, nombre: 'CARTER COMPLETO DE MOTOR ORIGINAL', categoria: 'Motor', marca: 'Mercedes Benz', modelo: 'Actros', tipo: 'Alternativo', imagen: carterImg, precio: 210000, descripcion: 'Cárter completo con montaje original.' },
    { id: 13, nombre: 'SET DE EMPAQUES DE MOTOR ', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: setEmpaquesImg, precio: 125000, descripcion: 'Set completo de empaques para motores DD15.' },
    { id: 14, nombre: 'KIT EMPAQUE CULATA S-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: kitEmpaquesImg, precio: 98000, descripcion: 'Kit de empaques para culata S-60.' },
    { id: 15, nombre: 'VOLANTE MOTOR S50-60', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: volanteDetroitImg, precio: 85000, descripcion: 'Volante de inercia Detroit S50-60.' },
    { id: 16, nombre: 'INYECTOR COMPLETO S60 12L', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: inyectorImg, precio: 220000, descripcion: 'Inyector completo para S60 12L.' },
    { id: 17, nombre: 'SENSOR PRESION DE ACEITE', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: sensorImg, precio: 18500, descripcion: 'Sensor de presión de aceite compatible DD15.' },
    { id: 18, nombre: 'TURBO S60 D4', categoria: 'Motor', marca: 'Detroit', modelo: 'S60', tipo: 'Alternativo', imagen: turboImg, precio: 420000, descripcion: 'Turbo de alto flujo para S60 D4.' },
    { id: 19, nombre: 'BOMBA DE ACEITE  ORIGINAL', categoria: 'Motor', marca: 'Detroit', modelo: 'DD15', tipo: 'Alternativo', imagen: bombaDetroitImg, precio: 76000, descripcion: 'Bomba de aceite original Detroit.' },
    { id: 20, nombre: 'BHT B4761 RADIADOR DE AGUA', categoria: 'Motor', marca: 'Detroit', modelo: 'M2', tipo: 'Alternativo', imagen: radiadorImg, precio: 195000, descripcion: 'Radiador de agua BHT B4761.' },
];

export default vehiculos;
