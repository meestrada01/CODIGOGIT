const URL = 'https://jsonplaceholder.typicode.com/todos';

/**
 * fetch es una función propia del navegador para JAVASCRIPT
 * tiene un comportamiento similar a la librería axios
 */

fetch(URL)
	.then((peticion) => {
		return peticion.json();
	})
	.then((data) => {
		console.log(data);
	});
