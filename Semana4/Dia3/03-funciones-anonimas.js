/**
 * FUNCIONES ANONIMAS y CALLBACKS
 */



function buscarPorDNI(dni, parametro2) {
  /**
   * conexion a la BD usando el dni
   */
  parametro2("Jorge");

}


buscarPorDNI("78451245", function (nombre) {
  console.log(`Encontrado ${nombre}`);
})









/********************************** */

let saludar = function () {
  console.log("Estoy saludando");
}

saludar();





/**
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */
const getNombres = (callback) => {
  fetch("https://reqres.in/api/users").then((peticion) => {
    return peticion.json();
  }).then(data => {
    let nombres = data.data.map(obj => obj.first_name);
    callback(nombres);
  })
};


getNombres(function (usuarios) {
  console.log(usuarios);
});