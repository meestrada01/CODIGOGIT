/**
 * 1. Algoritmo para sumar 4 notas
 * e imprimir el promedio de los 4
 */
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, promedio = 0, suma = 0;

/**
 * typeof [variable] => devuelve un string con el tipo de dato 
 * de un elemento
 */
console.log(typeof c1);
/**
 * OJO: Anteponer el símbolo "+" a una instrucción o variable la
 * convierte automáticamente en un número.
 */
c1 = +prompt("Ingrese la primera nota");
c2 = +prompt("Ingrese la segunda nota");
c3 = +prompt("Ingrese la tercera nota");
c4 = +prompt("Ingrese la cuarta nota");
// ¿Como mostrar el tipo de dato de una variable?
console.log(typeof c1);

suma = c1 + c2 + c3 + c4;
promedio = suma / 4;

/**
 * El uso de los backticks ( ` ) nos ayudan a concatenar
 * variables  con strings en una sola línea sin el uso del operador ( + )
 */
console.log("El promedio es:" + promedio);
console.log(`El promedio es: ${promedio}`);