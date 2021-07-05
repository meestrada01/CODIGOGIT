/**
 * CREACIÓN DE UNA PROMESA
 * Se usa RESOLVE para devolver una respuesta exitosa en la promesa
 * Se usa REJECT para devolver una respuesta fallida en la promesa
 */

const miPromesa = new Promise((resolve, reject) => {
  /**
   * En el desarrollo de una promesa, podemos ejecutar
   * procesos asíncronos y cuando éstos terminen, retornar
   * los resultados
   */
  setTimeout(() => {
    let rpta = 50;
    if (rpta === 100) {
      resolve(rpta);
    } else {
      reject("Error, no es 100");
    }
  }, 2000);
});

/**
 * EL CONSUMO DE UNA PROMESA
 * Se consume una promesa con el uso de las funciones THEN, CATCH y FINALLY
 * Se usa THEN para recibir lo que retorna RESOLVE
 * Se usa CATCH para recibir lo que retorna REJECT
 */

miPromesa
  .then((rpta) => {
    console.log(rpta);
  })
  .catch((rpta) => {
    console.log(rpta);
  });

/**
 * Creando una función que RETORNE UNA PROMESA
 */

const getCoordenadas = (ciudad) => {
  let miPromesa = new Promise((resolve, reject) => {
    // algunos algoritmos para conectarnos a la base de datos
    // para obtener las coordenadas de la ciudad buscada
    setTimeout(() => {
      if (ciudad === "") {
        reject("No se recibió la ciudad");
      } else {
        resolve([-16.513, -70.63861]);
      }
    }, 2000);
  });
  return miPromesa;
};

getCoordenadas("")
  .then((rpta) => {
    console.log(rpta);
  })
  .catch((rpta) => {
    console.log(rpta);
  });
