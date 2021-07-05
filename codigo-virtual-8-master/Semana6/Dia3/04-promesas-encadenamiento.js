const getDiaCastellano = (numero) => {
	return new Promise((resolve, reject) => {
		let dias = [
			'Lunes',
			'Martes',
			'Miercoles',
			'Jueves',
			'Viernes',
			'Sábado',
			'Domingo'
		];
		setTimeout(() => {
			if (numero >= 0 && numero <= 6) {
				resolve(dias[numero]);
			} else {
				reject('Error en el número de día');
			}
		}, 2000);
	});
};

const getDiaIngles = (numero) => {
	return new Promise((resolve, reject) => {
		let dias = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		];
		setTimeout(() => {
			if (numero >= 0 && numero <= 6) {
				resolve(dias[numero]);
			} else {
				reject('Error en el número de día');
			}
		}, 2000);
	});
};

/**
 * Obtener el nombre de un día de la semana en castellano
 * Y sí y sólo sí funciona en castellano, obtener el mismo valor en inglés
 */
getDiaCastellano(1)
	.then((diaCastellano) => {
		console.log(diaCastellano);
		return getDiaIngles(1);
	})
	.then((diaIngles) => {
		console.log(diaIngles);
	})
	.catch((error) => {
		console.log(error);
	});
