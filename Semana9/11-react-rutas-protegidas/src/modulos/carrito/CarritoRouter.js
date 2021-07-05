import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CarritoHeader from './components/CarritoHeader';
import CarritoPago from './pages/CarritoPago';
import CarritoResumen from './pages/CarritoResumen';

const CarritoRouter = () => {
	return (
		<>
			<CarritoHeader />
			<Switch>
				<Route path="/carrito/resumen" component={CarritoResumen} />
				<Route path="/carrito/pago" component={CarritoPago} />
			</Switch>
		</>
	);
};

export default CarritoRouter;
