/**
 * ¿Cómo insertar un elemento en un arreglo?
 * arreglo.push(elemento_a_insertar)
 * Insertando un elemento en la posición final de un
 * arreglo
 */

let marcasDeAutos = [];
marcasDeAutos.push("hyundai");
marcasDeAutos.push("kia");
marcasDeAutos.push("audi");

/**
 * Ejercicio: Hacer que el usuario pueda ingresar 5 marcas
 * adicionales
 */

for (let i = 0; i < 5; i++) {
  let marca = prompt("Ingrese una nueva marca");
  // inyectando la nueva marca en el arreglo
  marcasDeAutos.push(marca);
}
let marca = "Mercedes Benz"
console.log(marcasDeAutos);
console.log(marca);



