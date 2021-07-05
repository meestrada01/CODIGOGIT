import { getCategorias, getVehiculos, postVehiculo } from './servicios.js';
import { create, gebid } from './utils.js';

let categoriasGlobal = [];

const selectCategorias = gebid('selectCategorias');
const contenedorVehiculos = gebid('contenedorVehiculos');
const loading = gebid('loading');

const formVehiculo = gebid('formVehiculo');
const inputPlaca = gebid('inputPlaca');
const selectColor = gebid('selectColor');
const inputFoto = gebid('inputFoto');

formVehiculo.onsubmit = (e) => {
	e.preventDefault();

	// armar el objVehiculo para mandarlo a los servicios de POST
	let objVehiculo = {
		color: selectColor.value,
		placa: inputPlaca.value,
		foto: inputFoto.value,
		categoria_id: selectCategorias.value
	};
	activarLoading('Registrando vehículo...');
	postVehiculo(objVehiculo).then((rpta) => {
		desactivarLoading();
		if (rpta) {
			llamarGetVehiculos();
		} else {
			// TODO: Mostrar una ventana de error de creacións
		}
	});
};

const activarLoading = (mensaje) => {
	loading.style.display = 'flex';
	loading.innerText = mensaje;
};

const desactivarLoading = () => (loading.style.display = 'none');

const llenarVehiculos = (vehiculos) => {
	contenedorVehiculos.innerHTML = '';

	vehiculos.forEach((objVehiculo) => {
		const colMd4 = create('div');
		colMd4.classList.add('col-md-4');

		const card = create('div');
		card.classList.add('card');

		const imagen = create('img');
		imagen.classList.add('card-img-top');
		imagen.src = objVehiculo.foto;

		const cardBody = create('div');
		cardBody.classList.add('card-body');

		const titulo = create('h4');
		titulo.classList.add('card-title');
		titulo.innerText = objVehiculo.placa;

		const pColor = create('p');
		pColor.classList.add('card-text');
		pColor.innerHTML = `<strong>Color: </strong> ${objVehiculo.color}`;

		const pCategoria = create('p');
		pCategoria.classList.add('card-text');

		// Buscar en el arreglo global de categorías, aquella que cuyo ID coincida
		// con el ID de la categoría actual del vehículo
		let objCategoria = categoriasGlobal.find(
			(objCategoria) => +objCategoria.id === +objVehiculo.categoria_id
		);

		pCategoria.innerHTML = `<strong>Categoria: </strong> ${objCategoria.nombre}`;

		const btnAccion = create('button');
		btnAccion.classList.add('btn', 'btn-primary');
		btnAccion.innerText = 'Click';

		colMd4.append(card);
		card.append(imagen);
		card.append(cardBody);
		cardBody.append(titulo);
		cardBody.append(pColor);
		cardBody.append(pCategoria);
		cardBody.append(btnAccion);

		contenedorVehiculos.appendChild(colMd4);
	});
};

const llenarCategorias = (categorias) => {
	let options = '';
	categorias.forEach((objCategoria) => {
		options += `<option value="${objCategoria.id}">${objCategoria.nombre}</option>`;
	});
	selectCategorias.innerHTML = options;
};

const llamarGetVehiculos = () => {
	activarLoading('Cargando vehículos...');
	getVehiculos().then((vehiculos) => {
		desactivarLoading();
		llenarVehiculos(vehiculos);
	});
};

activarLoading('Cargando categorias...');

getCategorias().then((categorias) => {
	categoriasGlobal = categorias;
	llenarCategorias(categorias);
	desactivarLoading();
	llamarGetVehiculos();
});
