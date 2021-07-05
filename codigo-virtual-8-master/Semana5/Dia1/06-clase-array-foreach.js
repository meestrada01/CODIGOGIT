/**
 *  arreglo.forEach((elemento,indice?,arreglo?)=>{})
 *
 * método que recorre todos los elementos de un arreglo.
 * - Por cada ítem, se ejecuta un callback que debemos
 * pasar a la función forEach
 * - El callback puede recibir hasta 3 parámetros:
 * 1. el elemento de la iteración actual
 * 2. el índice o posición de la iteración actual - opcional
 * 3. una copia del arreglo original - opcional
 * - forEach no retorna valores
 *
 */

let users = [
	{
		id: 1,
		email: 'george.bluth@gmail.in',
		first_name: 'George',
		last_name: 'Bluth',
		avatar: 'https://reqres.in/img/faces/1-image.jpg'
	},
	{
		id: 2,
		email: 'janet.weaver@reqres.in',
		first_name: 'Janet',
		last_name: 'Weaver',
		avatar: 'https://reqres.in/img/faces/2-image.jpg'
	},
	{
		id: 3,
		email: 'emma.wong@reqres.in',
		first_name: 'Emma',
		last_name: 'Wong',
		avatar: 'https://reqres.in/img/faces/3-image.jpg'
	},
	{
		id: 4,
		email: 'eve.holt@gmail.in',
		first_name: 'Eve',
		last_name: 'Holt',
		avatar: 'https://reqres.in/img/faces/4-image.jpg'
	},
	{
		id: 5,
		email: 'charles.morris@reqres.in',
		first_name: 'Charles',
		last_name: 'Morris',
		avatar: 'https://reqres.in/img/faces/5-image.jpg'
	},
	{
		id: 6,
		email: 'tracey.ramos@reqres.in',
		first_name: 'Tracey',
		last_name: 'Ramos',
		avatar: 'https://reqres.in/img/faces/6-image.jpg'
	}
];

let gmails = [];
users.forEach((usuario, i) => {
	console.log(`${i} - ${usuario.first_name} ${usuario.last_name}`);
	if (usuario.email.indexOf('gmail') >= 0) {
		gmails.push(usuario);
	}
});
console.log(gmails);

/**
 * Formas de analizar expresiones regulares
 */
let gmailRegex = new RegExp('gmail');
let rptaRegex = gmailRegex.test('jorge@gmail.com');
if (rptaRegex === true) {
	console.log('Sí es gmail');
} else {
	console.log('No es gmail');
}

if (/gmail/.test('jorge@smail.com')) {
	console.log('Sí es gmail');
} else {
	console.log('No es gmail');
}
