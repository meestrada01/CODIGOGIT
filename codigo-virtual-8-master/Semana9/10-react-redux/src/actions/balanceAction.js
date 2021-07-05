import { AGREGAR_DINERO, RESTAR_DINERO } from '../types/types';

export const sumarBalance = (cantidad) => {
	return {
		type: AGREGAR_DINERO,
		payload: {
			monto: cantidad,
			mensaje: 'Agregando 10 luquitas'
		}
	};
};

export const restarBalance = (cantidad) => {
	return {
		type: RESTAR_DINERO,
		payload: {
			monto: cantidad,
			mensaje: 'Restando 10 lucrecias'
		}
	};
};
