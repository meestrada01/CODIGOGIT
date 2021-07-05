/**
 * arreglo.find((elemento,indice?,arreglo?)=>{})
 * método que recorre todos los elementos de un arreglo
 *
 * - El método find retorna un único elemento.
 * - Similar al método filter, se debe cumplir una condición
 * para que el elemento que cumpla con esa condición, sea
 * retornado
 * - Sólo es retornado el primer elemento que cumpla
 * con la condición.
 * - Si ningún elemento cumple con la condición, se retorna
 * un UNDEFINED
 */

let users = [
	{
		id: 1,
		email: 'george.bluth@gmail.in',
		first_name: 'George',
		last_name: 'Bluth',
		avatar: 'https://reqres.in/img/faces/1-image.jpg',
		age: 12
	},
	{
		id: 2,
		email: 'janet.weaver@reqres.in',
		first_name: 'Janet',
		last_name: 'Weaver',
		avatar: 'https://reqres.in/img/faces/2-image.jpg',
		age: 50
	},
	{
		id: 3,
		email: 'emma.wong@reqres.in',
		first_name: 'Emma',
		last_name: 'Wong',
		avatar: 'https://reqres.in/img/faces/3-image.jpg',
		age: 35
	},
	{
		id: 4,
		email: 'eve.holt@gmail.in',
		first_name: 'Eve',
		last_name: 'Holt',
		avatar: 'https://reqres.in/img/faces/4-image.jpg',
		age: 15
	},
	{
		id: 5,
		email: 'charles.morris@reqres.in',
		first_name: 'Charles',
		last_name: 'Morris',
		avatar: 'https://reqres.in/img/faces/5-image.jpg',
		age: 17
	},
	{
		id: 6,
		email: 'tracey.ramos@reqres.in',
		first_name: 'Tracey',
		last_name: 'Ramos',
		avatar: 'https://reqres.in/img/faces/6-image.jpg',
		age: 36
	}
];

/**
 * encontrar al elemento de ID=3
 * Hacerlo de la forma corta usando el método find
 */

let usuarioId3 = users.find((usuario, i) => usuario.id === 3);
console.log(usuarioId3);
