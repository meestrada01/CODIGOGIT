/**
 * SENTENCIA break vs continue
 * break => interrumpir todas las iteraciones que quedan
 * por darse en una estructura repetitiva
 * continue => interrumpir la iteracion actual, y salta
 * automáticamente a la siguiente iteración
 */

let numeros = [3, 545, 3, -5, 34, 90, 2, 90, 0];
/**
 * Ejercicio: imprimir los números positivos hasta encontrar un número
 * negativo
 */

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    console.log(numeros[i]);
  } else {
    break;
  }
}


/**
 * EJERCICIO: si un número es impar imprimirlo, y en caso
 * contrario saltar a la siguiente iteración
 */

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    continue;
  }
  console.log(numeros[i]);
}