/**
 * FUNCIONES
 * Porciones de código disponibles
 * para ejecutarlas en cualqueir momento
 */

function tablaDeMultiplicar(n = 5, limite = 10) {
	console.log(`******** TABLA DEL ${n}`);
	for (let i = 0; i < limite; i++) {
		console.log(`${n} x ${i} = ${i * n}`);
	}
}

tablaDeMultiplicar(5, 12);
tablaDeMultiplicar(6, 15);
tablaDeMultiplicar(7);
tablaDeMultiplicar(8);

function factorial(n) {
	let total = 1;
	for (let i = n; i > 0; i--) {
		total = total * i;
	}
	console.log(`TOTAL EN FUNCIÓN: ${total}`);
	return total;
}

let fact5 = factorial(5);

console.log(`El factorial de 5 es: ${fact5}`);




function sumar(a, b) {
	return a + b;
}


let suma7y8 = sumar(7, 8);

// sin usar el símbolo "+"
// sumar 4 números, sólo usando la función sumar

let suma7y6y5y3 = sumar(sumar(7, 6), sumar(5, 3))

console.log(`Sumando 7 y 8: ${suma7y8}`);
console.log(`Sumando 7 y 6 y 5 y 3: ${suma7y6y5y3}`);


/**************************************************** */


function validarPasswords(ps1, ps2) {
	if (ps1 === ps2 && ps1.length >= 6) {
		return true;
	}
	console.log("A continuación se retorna false");
	return false;

}

let resultado = validarPasswords("abcdefg", "abcdefg");
console.log(resultado);




