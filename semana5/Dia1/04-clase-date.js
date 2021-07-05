/**
 * Clase Date
 * para manejar fechas
 */
let hoy = new Date();
console.log(hoy);

/**
 * Obtener el año de un objeto DATE
 * date.getFullYear();
 */

console.log(`Año actual: ${hoy.getFullYear()}`);

/**
 * Obtener el mes actual
 * Enero: 0
 * Diciembre: 11
 * date.getMonth();
 */

console.log(`Mes actual: ${hoy.getMonth() + 1}`);

/**
 * Obtener la fecha de hoy (el día del mes)
 * date.getDate();
 */

console.log(`Día del mes: ${hoy.getDate()}`);

/**
 * Obtener las horas, minutos y segundos
 * date.getHours()
 * date.getMinutes()
 * date.getSeconds()
 */

console.log(`Hora actual: ${hoy.getHours()}`);
console.log(`Minutos actual: ${hoy.getMinutes()}`);
console.log(`Seconds actual: ${hoy.getSeconds()}`);

/**
 * Obtener del día de la semana
 * date.getDay();
 */
const dias = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado',
];

console.log(`Día de la semana: ${dias[hoy.getDay()]}`);

/**
 * Constructores de fechas
 */

let diaDelPadre = new Date(2021, 5, 20, 0, 0, 0);
console.log('El día del padre es: ');
console.log(dias[diaDelPadre.getDay()]);
