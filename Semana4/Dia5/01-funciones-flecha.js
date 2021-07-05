const suma = function (a, b) {
  return a + b
}

const multiplicar = (a, b) => {
  return a * b
}

console.log(`5 x 8: ${multiplicar(5,8)}`);


/**
 * Las funciones anónimas pueden tener retornos implícitos
 * si el desarrollo de la función tiene una línea de código
 * CONSEJO:
 * cuando queremos representar un retorno implicito,
 * procurar encerrarlo en símbolo de paréntesis
 */
const dividir = (a, b) => (a / b);
console.log(`9 / 3 : ${dividir(9,3)}`);


/**
 * Si una función de flecha recibe 1 parámetro(exactamente 1)
 * pueden obviarse los paréntsis que encierran a ese parámetro
 */

const cuadrado = n => n * n;
console.log(`Cuadrado de 9: ${cuadrado(9)}`);

/**
 * Si una función de flecha no recibe parámetros, colocar
 * la apertura y cierre de paréntesis.
 * 
 * Si la función de fleca sólo tiene una línea de código de
 * desarrollo, se pueden obviar las llaves
 */

const saludar = () => console.log("Saludando!!!")
saludar();