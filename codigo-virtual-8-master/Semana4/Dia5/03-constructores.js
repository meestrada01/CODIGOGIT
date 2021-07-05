const Plato = () => {
  let objPlato = {
    nombre: "",
    precio: 0,
    ingredientes: []
  }
  return objPlato;
}

let ceviche = Plato();
let secoDeCordero = Plato();
ceviche.nombre = "Cebiche";

console.log(ceviche);
console.log(secoDeCordero);








//**llenando las características de ambos */



/*******************ERRORSH ******************** */
let vehiculo = {
  marca: "",
  tipo: "",
  color: "",
  anio: 0,
}

let carroJorge = vehiculo;
let carroEmily = vehiculo;

carroJorge.marca = "Mazda";

console.log(carroJorge);
console.log(carroEmily);
console.log(vehiculo);