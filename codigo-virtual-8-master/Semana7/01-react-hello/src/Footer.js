import React from 'react';

const Footer = () => {
	let anio = new Date().getFullYear();

	return (
		<>
			<hr />
			<footer>
				<p>Año del bicentenario</p>
				<small>CodiGo - {anio} - Todos los derecho reservados</small>
			</footer>
		</>
	);
};
export default Footer;
