/**
{
  balance: 0,
  mensaje: ""
}

 */

import {
	AGREGAR_DINERO,
	MODIFICAR_MENSAJE,
	RESTAR_DINERO
} from '../types/types';

/**
 * El reducer es la función que recibe solicitudes del DISPATCH
 * para cambiar el estado global.
 *
 * @param {*} state Es una copia del estado global antiguo
 * @param {*} action Es el objeto que nos envía el DISPATCH
 * @returns el reducer retorna el nuevo estado global
 */
export const balanceReducer = (state = { balance: 0, mensaje: '' }, action) => {
	switch (action.type) {
		case AGREGAR_DINERO:
			return {
				balance: state.balance + action.payload.monto,
				mensaje: action.payload.mensaje
			};
		case RESTAR_DINERO:
			return {
				balance: state.balance - action.payload.monto,
				mensaje: action.payload.mensaje
			};
		case MODIFICAR_MENSAJE:
			return {
				...state,
				mensaje: action.payload.mensaje
			};
		// en el caso de que ninguna actión coincida con un action
		// específico, se retornará el estado igual al anterior
		default:
			return state;
	}
};
