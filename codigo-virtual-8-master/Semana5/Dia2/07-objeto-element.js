/**
 * CLase HTMLElement, sus propiedades y métodos
 */

/**
 * elemento.innerText
 * SET - GET
 * texto interno de la etiqueta
 */

const parrafo1 = document.querySelector('#parrafo1');

//get
console.log(parrafo1.innerText);
//set
parrafo1.innerText = 'Nuevo texto del párrafo';

/**
 * elemento.innerHTML
 * Análogo al innerText, sin embargo, si colocamos texto
 * con etiquetas, las etiquetas son interpretadas por el DOM
 */

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

// seteando innerText
div1.innerText = "<a href='www.google.com'>Link a Google</a>";
// seteando innerHTML
div2.innerHTML = "<a href='www.google.com'>Link a Google</a>";

/**
 * elemento.append(otro_elemento)
 * agrega un elemento dentro de otro.
 * OJO: agrega el elemento al final de los hijos del elemento padre
 */

// 1. creando un elementro "strong"
const textoNegrita = document.createElement('strong');

textoNegrita.innerText = 'CodiGo 2021';

parrafo1.append(textoNegrita);

///////

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

const listaUsuarios = document.querySelector('#lista-usuarios');

/**
 * 1. Por cada usuario, crear un <li>
 * 2. colocar el nombre y el apellido dentro del <li>
 * 3. agregar el <li> al <ul>
 */

// listaUsuarios.innerHTML = `<li>item 1</li><li>item 2</li>`;

let lisString = '';

users.forEach((usuario) => {
	// let liTemporal = document.createElement('li');
	// liTemporal.innerText = `${usuario.first_name} ${usuario.last_name}`;
	// listaUsuarios.append(liTemporal);
	lisString = lisString + `<li>${usuario.first_name} ${usuario.last_name}</li>`;
});

listaUsuarios.innerHTML = lisString;
