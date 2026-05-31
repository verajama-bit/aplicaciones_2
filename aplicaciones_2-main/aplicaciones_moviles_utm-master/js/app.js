// app.js

import { rutas as seedRutas } from "./data/seed.js";
import { cargarRutasStorage } from "./models/service/storage.js";
import { renderizarRutas } from "./ui/render.js";

document.addEventListener("DOMContentLoaded", () => {

    const rutasStorage = cargarRutasStorage();

    const rutas = rutasStorage && rutasStorage.length > 0
        ? rutasStorage
        : seedRutas;

    renderizarRutas(rutas);

});