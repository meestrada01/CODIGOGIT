import React, { useEffect, useState } from 'react';
import Carrito from './components/Carrito';
import Producto from './components/Producto';

import { products } from './data/products';

const App = () => {
	const [canasta, setCanasta] = useState([]);

	useEffect(() => {
		let canastals = localStorage.getItem('canastals');
		if (canastals) {
			canastals = JSON.parse(canastals);
			setCanasta(canastals);
		}
		console.log(canastals);
	}, []);

	const agregarAlCarrito = (objProducto) => {
		// algoritymo para agreegar un nuevo produycto a la canasta
		let copiaCanasta = [...canasta];
		// buscar el producto que intentamos agregar para ver si existe en la canasta
		// o agregamos un nuevo producto
		let productoEncontrado = copiaCanasta.find((producto) => {
			if (producto.id === objProducto.id) {
				return producto;
			}
		});

		if (productoEncontrado) {
			// el producto ya existía en la canasta
			console.log('el propducto ya existía');
			productoEncontrado.cantidad++;
		} else {
			// el producto va a ser agregado por primera vez
			console.log('el producto va aser agredo por primera vez');
			copiaCanasta.push({
				...objProducto,
				cantidad: 1
			});
		}

		localStorage.setItem('canastals', JSON.stringify(copiaCanasta));
		setCanasta(copiaCanasta);
	};

	return (
		<>
			<main className="container">
				<Carrito canasta={canasta} />
				<div className="row">
					<div className="col-12">
						<h1 className="display-5">Tienda app</h1>
					</div>
				</div>
				{/* Contenedore de los productos */}
				<div className="row">
					{products.map((objProducto, i) => {
						return (
							<Producto
								agregarAlCarrito={agregarAlCarrito}
								prod={objProducto}
								key={i}
							/>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default App;
