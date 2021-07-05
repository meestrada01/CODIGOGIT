import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

export const getProductos = async (pagina) => {
	let url = '';
	if (pagina > 0) {
		url = `${URL_BACKEND}/productos?page=${pagina}&limit=6`;
	} else {
		url = `${URL_BACKEND}/productos`;
	}

	const rpta = await axios.get(url);
	return rpta;
};
