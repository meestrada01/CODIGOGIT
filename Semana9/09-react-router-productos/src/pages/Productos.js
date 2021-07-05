import React, { useState, useEffect } from 'react';
import CardProducto from '../components/CardProducto';
import Cargando from '../components/Cargando';
import { getProductos } from '../services/productos';

const Productos = () => {
	const [productos, setProductos] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		getProductos().then((response) => {
			setProductos(response.data);
			setCargando(false);
		});
	}, []);

	return (
		<>
			<div className="row">
				{cargando === true ? (
					<Cargando />
				) : (
					productos.map((objProducto) => {
						return (
							<CardProducto objProducto={objProducto} key={objProducto.id} />
						);
					})
				)}
			</div>
		</>
	);
};

export default Productos;
