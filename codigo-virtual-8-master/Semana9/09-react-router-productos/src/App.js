import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Carrito from './pages/Carrito';
import Productos from './pages/Productos';
import NavBar from './components/NavBar';
import { cargarCategorias } from './redux/actions/categoriaActions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(cargarCategorias());
	}, []);

	// VERIFICAR SI LAS CATEOGIRAS HAN TERMINADO DE CARGAR
	const categoriaState = useSelector((state) => state.categoria);
	console.log(categoriaState);
	if (categoriaState.cargando) {
		return <h1 className="display-4">Cargando categorias...</h1>;
	} else {
		return (
			<Router>
				<div className="d-flex">
					<Header />
					<main className="container-fluid">
						<NavBar />
						<Switch>
							<Route path="/productos" component={Productos} />
							<Route path="/carrito" component={Carrito} />
						</Switch>
					</main>
				</div>
			</Router>
		);
	}
};

export default App;
