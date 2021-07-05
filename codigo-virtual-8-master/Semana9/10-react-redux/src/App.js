import React from 'react';
import { Provider } from 'react-redux';
import Botones from './components/Botones';
import Formulario from './components/Formulario';
import Informacion from './components/Informacion';
import { store } from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Botones />
				<Informacion />
				<hr />
				<Formulario />
			</div>
		</Provider>
	);
};

export default App;
