const STORAGE_KEY = "rutasUniversitarias"; 
// Guardar rutas en localStorage 
export function guardarRutasStorage(rutas) { 
    try { 
        localStorage.setItem( 
            STORAGE_KEY, 
            JSON.stringify(rutas) 
        ); 
        return true; 
    } catch (error) { 
        console.error( "Error al guardar rutas:", error ); 
        return false; 
    } 
} 
// Cargar rutas desde localStorage 
export function cargarRutasStorage() { 
    try { 
        const rutasGuardadas = localStorage.getItem(STORAGE_KEY);
         if (!rutasGuardadas) { 
            return []; 
        } 
        const datos = JSON.parse(rutasGuardadas); 
        // Validar estructura 
        if (!Array.isArray(datos)) { 
            return []; 
        } 
        return datos; 
    } catch (error) { 
        console.error( "Error al cargar rutas:", error ); 
        return []; 
    } 
} 
// Eliminar datos almacenados 
export function limpiarStorage() { 
    localStorage.removeItem( STORAGE_KEY ); 
}
