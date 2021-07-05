import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import AdminRouter from './modulos/admin/AdminRouter';
import CarritoRouter from './modulos/carrito/CarritoRouter';
import CatalogoRouter from './modulos/catalogo/CatalogoRouter';
import HomeRouter from './modulos/home/HomeRouter';
import PrivateRoute from './PrivateRoute';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/catalogo" component={CatalogoRouter} />
				<Route path="/carrito" component={CarritoRouter} />
				<PrivateRoute path="/admin" component={AdminRouter} />
				{/* <Route path="/admin" component={AdminRouter} /> */}
				<Route exact path="/" component={HomeRouter} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default App;
