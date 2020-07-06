import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'


//Muestra una alerta

export function mostrarAlerta(alerta) {
    return (disptach) => {
        disptach(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

//ocultar Alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch(ocultarAlerta())
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})