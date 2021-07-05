/**
 * Ejemplo de método estático
 * Cuando un método es estático, se puede invocarlo
 * sin necesidad de crear un objeto de la clase
 * a la que pertenece
 */

class Utils {
	static valorDePi() {
		return 3.1415;
	}
}

console.log(Utils.valorDePi());

/**
 * La clase Math tiene muchos métodos estáticos en su interior
 * que podemos usar sin necesidad de instancia objetos
 */

/**
 * Math.srqt(numero)
 * retorna la raíz cuadrada de un número
 */
console.log(`Raiz cuadrada de 81: ${Math.sqrt(81)}`);

/**
 * Math.round(numero)
 * Redondear un número
 */
console.log(`Redondeando 4.85: ${Math.round(4.85)}`);

/**
 * Math.ceil(numero)
 * Devuelve el techo de un número decimal
 * Ejm:
 * Techo de 3.11 => 4
 * Techo de 2.0001 => 3
 */

console.log(`Techo de 4.01: ${Math.ceil(4.01)}`);

/**
 * Math.floor(numero)
 * Devuelve el piso de un número decimal
 * Ejm:
 * Piso de 3.99 => 3
 * Piso de 2.87 => 2
 */

console.log(`Piso de 8.99: ${Math.floor(8.99)}`);

/**
 * Obtener un número aleatorio entre dos números
 * dados
 * Math.random()
 */

// a continuación, un artificio para calcular un random
// entre dos números max y min
let aleatorio = Math.random() * (100 - 50) + 50;
console.log(aleatorio);

// Propiedad de los Numbers para redondear o aplicar decimales
// a un número determinado

// number.toFixed(cantidad_de_decimales)

console.log(aleatorio.toFixed(2));
