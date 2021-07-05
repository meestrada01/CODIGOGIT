let imagenes = [
	'https://i.picsum.photos/id/564/200/200.jpg?hmac=uExb18W9rplmCwAJ9SS5NVsLaurpaCTCBuHZdhsW25I',
	'https://i.picsum.photos/id/1052/200/200.jpg?hmac=C8TAQ7jOmsdTxY6LFqx0ft2jNVIX0GxUmo8kCnVHkIE',
	'https://i.picsum.photos/id/596/200/200.jpg?hmac=TiMsstBNF6YKq9Gn7QGsihITEUcv_O8QuTXEVR3T6GA',
	'https://i.picsum.photos/id/1047/200/200.jpg?hmac=kudT4eT6oVe4zhN1SEkQl9MN_AWC771kb2QAUgLjlmc',
	'https://i.picsum.photos/id/399/200/200.jpg?hmac=LCWCFY16G50iBPpqU6-FCw79ovEqvznYsxoQNCIldV8',
	'https://i.picsum.photos/id/134/200/200.jpg?hmac=a3L-JjVSGeG8w3SdNpzxdh8WSC0xHJXgeD6QryCK7pU'
];

let btnAnterior = document.getElementById('btn-anterior');
let btnSiguiente = document.getElementById('btn-siguiente');
let imagen = document.getElementById('imagen');

/**
 * HINT: usar una variable global que incie con el valor 0
 */
// let n = 0;

/**
 * - Al darle click al botón anterior,
 * se deberá correr una imagen hacia atrás del arreglo
 * de imágenes, si la imagen tiene la posición 0, el btnAnterior
 * no deberá responder al click
 *
 * - Al darle click al botón siguiente
 * comportamiento análogo al del btnAnterior
 */
// btnAnterior.onclick = () => {};
// btnSiguiente.onclick = () => {};

let n = 0;

btnAnterior.onclick = () => {
	//si la variable inicial está en 0, el boton anterior debe estar bloqueado
	n--;
	imagen.setAttribute('src', `${imagenes[n]}`);

	btnSiguiente.removeAttribute('disabled');
	if (n === 0) {
		btnAnterior.setAttribute('disabled', true);
	}
};

btnSiguiente.onclick = () => {
	n++;
	imagen.setAttribute('src', `${imagenes[n]}`);

	btnAnterior.removeAttribute('disabled');
	if (n === imagenes.length - 1) {
		btnSiguiente.setAttribute('disabled', true);
	}
};
