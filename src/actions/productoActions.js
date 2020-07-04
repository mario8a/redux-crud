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
    // COMENZAR_EDICION_PRODUCTO,
    // PRODUCTO_EDITADO_EXITO,
    // PRODUCTO_EDITADO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            // insertar en la API
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien, actualizar el state
           dispatch( agregarProductoExito(producto) );

           Swal.fire(
               'correcto',
               'EL producto se agrego correctamente',
               'success'
           )

        } catch (error) {
            console.log(error);
            // si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}


const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});