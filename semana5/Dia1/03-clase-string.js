/**
 * A continuación una serie de propiedades de la clase
 * STRING (cadenas de texto)
 */
let frase = 'Los programadores crean lo que las personas sueñan';

/**
 * cadena.length => retorna la cantidad de caracteres
 * que tiene un string
 */
console.log(`Cantidad de caracteres: ${frase.length}`);

/**
 * cadena.toUpperCase()=> retorna la misma frase en mayúsculas
 * OJO: retorna, no TRANSFORMA, es decir no cambia el estado original
 * de la variable
 */
console.log(`${frase.toUpperCase()}`);
/**
 * cadena.toLowerCase()=> retorna la misma frase en minúsculas
 * OJO: retorna, no TRANSFORMA, es decir no cambia el estado original
 * de la variable
 */
console.log(`${frase.toLowerCase()}`);

/**
 * cadena.split("criterio_de_separacion"),
 * Retorna un arreglo de strings dado un separador
 */
let resultadoSplit = frase.split(' ');
console.log(resultadoSplit);

/**
 * cadena.indexOf("termino_a_buscar")
 * Retorna la posición en la que inicia el término buscado dentro
 * de la cadena de texto
 */

/**
 *  Obteniendo la posición de la palabra crean
 */
console.log(frase.indexOf('crean'));
/**
 * Cuando la palabra o el término buscado no existe, el retorno es -1
 */
console.log(frase.indexOf('asd'));

/**
 * cadena.trim()
 * retorna la misma cadena de texto sin los espacios de los extremos
 * OJO: los espacios en blanco internos, no cuentan, sólo los externos
 */

let email = 'jorgegarba@gmail.com    ';
let password = '     123456';

console.log(email.trim());
console.log(password.trim());

/**
 * cadena.replace(termino_a_reemplazar,termino_de_reemplazo)
 * Reemplaza con el "termino_de_reemplazo" en cada lugar donde
 * se encuentre el "termino_a_reemplazar"
 */

let resultadoReplace = frase.replace('ñ', 'ni');
console.log(resultadoReplace);

let resultadoReplace2 = frase.replace(/\s/g, '');
console.log(resultadoReplace2);

/**
 * cadena.substr(posicion_inicial,cantidad_de_caracteres)
 * Retorna una subcadena de la cadena inicial que inicial
 * en la "posición_inicial" y a partir de ese punto, contamos
 * "cantidad_de_caracteres"
 */

let subcadena = frase.substr(8, 5);
console.log(subcadena);
