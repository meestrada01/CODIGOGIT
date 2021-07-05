import React from 'react';

const Receta = (props) => {
	return (
		<section>
			<h2 className="borde">{props.plato.nombre}</h2>
			<p className="receta">Ingredientes:</p>
			<ul>
				{props.plato.ingredientes.map((ingrediente, i) => {
					return <li key={i}>{ingrediente}</li>;
				})}
			</ul>
		</section>
	);
};

export default Receta;
