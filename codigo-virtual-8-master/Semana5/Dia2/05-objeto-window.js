console.log(window);
/**
 * El objeto window representa a todo el navegador
 * tiene funciones para controlar el DOM, funciones para
 * imprimir en consola, para mostrar alertas, para calcular
 * el tamaño del viewport, etc
 *
 * OJO, muchos métodos y propiedades de window se escriben
 * sin tener que colocar el objeto window como tal.
 * POR EJEMPLO:
 * prompt, console, alert, entre otros.
 */

window.console.log('EL MENSAJE');
/**
 * window.innerWidth
 * devuelve el ancho del viewport
 */

console.log(`Ancho de la viewport: ${window.innerWidth}`);

/**
 * Una de las propiedades más importantes de window,
 * es el objeto "document".
 * que sirve para controlar los elementos internos del DOM
 * - crear etiquetas
 * - eliminar etiquetas
 * - cambiar clases
 * - cambiar estilos
 * - modifgicar textos
 * - capturar valores en los formularios,
 * - etc
 */