import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Contacto from './pages/Contacto';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Portafolio from './pages/Portafolio';
import ProyectoDetalle from './pages/ProyectoDetalle';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/nosotros" component={Nosotros} />
				<Route path="/portafolio/:proyecto_id" component={ProyectoDetalle} />
				<Route path="/portafolio" component={Portafolio} />
				<Route path="/contacto" component={Contacto} />
				<Route path="/" exact component={Home} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
