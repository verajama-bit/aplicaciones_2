import {guardarRutasStorage} from "../models/services/storage.js";

// Elementos principales
const formRuta = document.getElementById("formRuta");

const mensaje = document.getElementById("mensaje");


// Array principal
let rutas = [];


// Evento submit
formRuta.addEventListener(
    "submit",
    registrarRuta
);


// Registrar nueva ruta
function registrarRuta(event) {
    event.preventDefault();

    // Capturar datos
    const destino =
        document.getElementById("destino")
        .value
        .trim();

    const bus =
        document.getElementById("bus")
        .value
        .trim();

    const horario =
        document.getElementById("horario")
        .value;

    const estado =
        document.getElementById("estado")
        .value;

    const tipo =
        document.getElementById("tipo")
        .value;


    // Validar campos vacíos
    if (
        destino === "" ||
        bus === "" ||
        horario === ""
    ) {

        mostrarMensaje(
            "Todos los campos son obligatorios.",
            "error"
        );

        return;
    }


    // Validar longitud mínima
    if (destino.length < 3) {

        mostrarMensaje(
            "Destino demasiado corto.",
            "error"
        );

        return;
    }


    // Validar nombre bus
    if (bus.length < 3) {

        mostrarMensaje(
            "Nombre del bus inválido.",
            "error"
        );

        return;
    }


    // Regla de negocio:
    // evitar rutas repetidas
    const existeRuta = rutas.some(ruta =>
        ruta.bus.toLowerCase() === bus.toLowerCase() && ruta.horario === horario
    );

    if (existeRuta) {
        mostrarMensaje(
            "Ya existe una ruta con ese horario.",
            "error"
        );
        return;
    }


    // Generar ID automático
    const nuevoId =
        rutas.length > 0 ?
        rutas[rutas.length - 1].id + 1
        : 1;


    // Crear objeto ruta
    const nuevaRuta = {
        id: nuevoId,
        destino,
        bus,
        horario,
        estado,
        tipo
    };


    // Insertar nueva ruta
    rutas.push(nuevaRuta);


    // Guardar información
    const guardadoCorrecto =
        guardarRutasStorage(rutas);


    // Validar guardado
    if (guardadoCorrecto) {

        mostrarMensaje(
            "Ruta registrada correctamente.",
            "success"
        );

    } else {

        mostrarMensaje(
            "Error al guardar.",
            "error"
        );
    }


    // Actualizar interfaz
    renderizarRutas(rutas);


    // Limpiar formulario
    formRuta.reset();
}


// Mostrar mensajes
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.style.color =
        tipo === "error"
        ?
        "#ef4444"
        :
        "#10b981";
    // Ocultar mensaje
    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}

