/**
 * Destructuración de objetos
 */

let objPais = {
	nombre: 'Perú',
	poblacion: 33000000,
	idiomas: ['Castellano', 'Aymara', 'Quechua'],
	monarquia: false
};

// 1. Forma correcta de copiar un objeto
let copiaPais = { ...objPais };

console.log(objPais);
console.log(copiaPais);

// 2. Copiando un arreglo, y agregando un campo adicional
// a dicho objeto

let copiaPais2 = {
	...objPais,
	gentilicio: 'peruano/peruana'
};

console.log(copiaPais2);

// 3. Copiando un arreglo, modificando uno de sus atributos
// y agregando uno nuevo.

let colombia = {
	...objPais,
	nombre: 'Colombia',
	poblacion: 5000000,
	gentilicio: 'colombiano/colombiana'
};

console.log(colombia);

// Forma tradicional de obtener el valor de un atributo interno
// const nombre = colombia.nombre;

const { nombre, poblacion } = colombia;
console.log(nombre);
console.log(poblacion);
console.log(colombia.gentilicio);

const imprimirPoblacion = ({ nombre, poblacion }) => {
	console.log(`Población de ${nombre}: ${poblacion} habitantes`);
};
imprimirPoblacion(objPais);
