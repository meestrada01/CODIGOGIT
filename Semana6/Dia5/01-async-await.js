/**
 *
 * Cuando una función asyncrona retorna alguna valor
 * con la sentencia "return" el valor que devuelve
 * lo hace en una promesa
 *
 * El return => equivale al resolve()
 *
 */
const getUsers = async () => {
	return ['Jorge', 'Manuel'];
};

const getNumers = async () => {
	return [5, 3, 3, 4, 23];
};

const consumir = async () => {
	// cuando vamos a usar la palabra reservada await
	// es obligatorio que debamos estar dentro de una
	// función asíncrona
	const users = await getUsers();
	const numeros = await getNumers();

	console.log(users);
	console.log(numeros);
  
};

consumir();