import React from 'react';
import Footer from './Footer';
import Receta from './Receta';
import Header from './Header';

const App = () => {
	let titulo = <h1>Recetas</h1>;
	let platos = [
		{
			nombre: 'Menestrón',
			ingredientes: ['Albaca', 'Espinaca', 'Fideitos', 'Carne']
		},
		{
			nombre: 'Cebiche',
			ingredientes: ['Pescado', 'Limón', 'Cebolla']
		},
		{
			nombre: 'Chupe de Camarones',
			ingredientes: ['Camarones', 'Leche', 'Queso']
		}
	];
	return (
		<div className="borde">
			<Header texto={'El logo de la app'} fecha={'17/06/2021'} />
			<hr />
			<main>
				{titulo}

				{platos.map((objPlato) => {
					return <Receta plato={objPlato} key={objPlato.nombre} />;
				})}
			</main>
			<Footer />
		</div>
	);
};

export default App;
