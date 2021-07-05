import { AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO } from '../types/types';

const initialState = {
	productos: [],
	total: 0
};

export const carritoReducer = (state = initialState, action) => {
	switch (action.type) {
		case AGREGAR_PRODUCTO:
			// buscar el producto que se desea agregar en
			// el estado de la aplicación
			let copiaProductos = [...state.productos];
			let posicion = copiaProductos.findIndex(
				(objProducto) => objProducto.id === action.payload.objProducto.id
			);
			// si la posición es mayor o igual 0, significa que el produdcto ya existía
			// en el carrito global.
			if (posicion >= 0) {
				copiaProductos[posicion].cantidad += 1;
			} else {
				// este es el caso en el que no exista el producto en el carrito global
				copiaProductos.push({ ...action.payload.objProducto, cantidad: 1 });
			}

			// AQUI SACAR EL TOTAL

			let montoTotal = copiaProductos.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);

			return {
				...state,
				productos: copiaProductos,
				// obtener el precio total de toooda la compra
				// HINT: RECORRER LOS PRODUCTOS DE LA copiaProductos final,
				// con la función reduce para obtener el total
				total: montoTotal
			};
		case ELIMINAR_PRODUCTO:
			let copiaProductos2 = [...state.productos];

			copiaProductos2 = copiaProductos2.filter(
				(objProducto) => objProducto.id !== action.payload.objProducto.id
			);

			let montoTotal2 = copiaProductos2.reduce((sumatoria, objProducto) => {
				return objProducto.precio * objProducto.cantidad + sumatoria;
			}, 0);

			return {
				...state,
				productos: copiaProductos2,
				total: montoTotal2
			};
		default:
			return state;
	}
};
