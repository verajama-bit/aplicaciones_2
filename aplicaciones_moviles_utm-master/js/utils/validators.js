// Valida campos vacíos

export function campoVacio(valor){

    return valor.trim() === "";
}

// Regla de negocio:
// capacidad mínima

export function capacidadValida(capacidad){

    return capacidad >= 10;
}