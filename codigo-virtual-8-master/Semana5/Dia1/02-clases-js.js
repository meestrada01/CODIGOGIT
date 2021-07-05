/**
 * Las clases son estructuras que permiten crear
 * objetos con las propiedades y métodos que tienen
 * sus clases Padres
 */

class Producto {
	descripcion = '';
	precio = 0;
	color = '';
	constructor(desc = '', prec = 0, color = '') {
		this.descripcion = desc;
		this.precio = prec;
		this.color = color;
	}
	imprimirDatos = function () {
		console.log('** Datos del producto **');
		console.log(`Nombre: ${this.descripcion}`);
		console.log(`Precio: S/${this.precio}`);
		console.log(`color: ${this.color}`);
	};
}

let objProducto1 = new Producto('Play Station 5', 4000.0, 'blanco');
objProducto1.color = 'Gris';
objProducto1.imprimirDatos();

let objProducto2 = new Producto();
console.log(objProducto2);

/**
 * Creando objetos de la clase Array
 * 02 formas
 */
let arreglo1 = [90, 8, 7];
let arreglo2 = new Array();
arreglo2.push(50);
arreglo2.push(34);
arreglo2.push(8);

console.log(arreglo1);
console.log(arreglo2);

/**
 * Creando numbers / numeros desde su clase
 * primitiva
 */

let edad = 29;
let edad2 = new Number(20);
console.log(edad);
console.log(edad2);

let rpta = edad + edad2;
console.log(rpta);
