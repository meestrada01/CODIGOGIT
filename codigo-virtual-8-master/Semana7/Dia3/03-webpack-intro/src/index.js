const axios = require('axios').default;

axios
	.get(
		'https://api.themoviedb.org/3/search/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&query=forest&include_adult=false'
	)
	.then((rpta) => {
		console.log(rpta.data);
	});

const saludar = () => {
	console.log('saludando en javascript node');
};

saludar();
