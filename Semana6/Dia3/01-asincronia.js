/**
 * Asincronía
 */

console.log(1);
console.log(2);
setTimeout(() => {
	console.log(3);
}, 2000);
console.log(4);
console.log(5);

const getCoordenadas = (ciudad, callback) => {
	let rpta = [];
	setTimeout(() => {
		console.log('modificando rpta');
		rpta = [-16.1535, -70.5468];
		callback(rpta);
	}, 2000);
};

getCoordenadas('Arequipa', (rpta) => {
	console.log(rpta);
});

console.log('Configurando enrutamiento del sistema');
