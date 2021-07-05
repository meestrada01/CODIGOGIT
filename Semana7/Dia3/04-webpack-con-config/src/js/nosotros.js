import axios from 'axios';
axios
	.get(
		'https://api.themoviedb.org/3/search/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&query=forest&include_adult=false'
	)
	.then(({ data }) => {
		console.log(data);
	});

alert('asdas');
