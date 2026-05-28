// Importación del almacenamiento

import {
    obtenerDatos,
    guardarDatos
}
from "./storage.js";

// Obtener todas las rutas

export function obtenerRutas(){

    return obtenerDatos();
}

// Agregar nuevas rutas

export function agregarRuta(ruta){

    const rutas = obtenerDatos();

    rutas.push(ruta);

    guardarDatos(rutas);
}