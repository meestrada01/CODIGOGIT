import axios from 'axios';
import { URL_BACKEND } from '../../environments/environments';
import {
	SET_CATEGORIAS,
	SET_CATEGORIAS_CARGANDO,
	UNSET_CATEGORIAS_CARGANDO
} from '../types/types';

export const cargarCategorias = () => {
	return async (dispatch) => {
		dispatch({ type: SET_CATEGORIAS_CARGANDO });

		const url = `${URL_BACKEND}/categories`;
		const response = await axios.get(url);

		dispatch({
			type: SET_CATEGORIAS,
			payload: {
				categorias: response.data
			}
		});
		dispatch({ type: UNSET_CATEGORIAS_CARGANDO });
	};
};
