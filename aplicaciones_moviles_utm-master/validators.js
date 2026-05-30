// Validadores generales para el proyecto
// Proporciona funciones reutilizables para validación de formularios

/**
 * Verifica si un campo de texto está vacío
 *
 * @param {string} valor - Texto a validar
 * @returns {boolean} True si el valor está vacío o contiene solo espacios
 */
export function campoVacio(valor) {
    return typeof valor === 'string' && valor.trim() === '';
}

/**
 * Regla de negocio: capacidad mínima de un número
 *
 * @param {number} capacidad - Valor numérico a validar
 * @returns {boolean} True si la capacidad es igual o mayor a 10
 */
export function capacidadValida(capacidad) {
    return typeof capacidad === 'number' && capacidad >= 10;
}

/**
 * Normaliza texto: elimina espacios exteriores y convierte a minúsculas
 *
 * @param {string} texto - Texto a normalizar
 * @returns {string} Texto normalizado
 */
export function normalizarTexto(texto) {
    if (typeof texto !== 'string') return '';
    return texto.toLowerCase().trim();
}
