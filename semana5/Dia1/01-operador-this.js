/**
 * La palabra reservada this hace referencia al objeto
 * en el que se la invoca.
 * En el ejemplo a continuación, hace referencia al "objPersona"
 */
let objPersona = {
	nombre: 'Jorge',
	apellido: 'Garnica',
	mostrarDatos: function () {
		console.log(`${this.nombre} ${this.apellido}`);
	},
};

objPersona.mostrarDatos();

/** Creación de clases de forma tradicional en JS */

function Persona() {
	this.nombre = 'Jorgito';
	this.edad = 29;
	this.apellido = 'Garnica';
	// para usar el operador THIS, no se deben usar funciones
	// de flecha
	this.imprimirInfo = function () {
		console.log(`${this.nombre} ${this.apellido} con ${this.edad} años`);
	};
}

let objPersona1 = new Persona();
objPersona1.imprimirInfo();
objPersona1.edad = 30;
objPersona1.imprimirInfo();
