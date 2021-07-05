const path = require('path');

module.exports = {
	entry: {
		main: './src/js/index.js',
		nosotros: './src/js/nosotros.js'
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		//[name] es el comodin del nombre de la propiedad del
		// atributo entry
		filename: '[name].js'
	}
};
