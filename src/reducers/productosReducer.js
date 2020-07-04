 
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    // COMENZAR_DESCARGA_PRODUCTOS,
    // DESCARGA_PRODUCTOS_EXITO,
    // DESCARGA_PRODUCTOS_ERROR,
    // OBTENER_PRODUCTO_ELIMINAR,
    // PRODUCTO_ELIMINADO_EXITO,
    // PRODUCTO_ELIMINADO_ERROR,
    // OBTENER_PRODUCTO_EDITAR,
    // PRODUCTO_EDITADO_EXITO,
    // PRODUCTO_EDITADO_ERROR
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false, 
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}