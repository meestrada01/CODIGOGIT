import { peliculas } from './data.js';

var ctx = document.getElementById('myChart').getContext('2d');

/**
 * Hacer algo para obtner en un arreglo la lista de nombres de peliculas
 * Hacer algo para obtener en otro arreglo la lista de votos por pelicula
 */
const nombres = peliculas.map((peli) => {
	return peli.title;
});

const votos = peliculas.map((peli) => peli.vote_count);

var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: nombres,
		datasets: [
			{
				label: '# of Votes',
				data: votos,
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}
		]
	},
	options: {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
