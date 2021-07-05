import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../services/usuarios';

const Usuarios = () => {
	console.log('Inicio Usuarios');

	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		console.log('Inicio useEffect');
		// useEffect es un hook que evita que una porción de código sea ejecutada
		// más de una vez, independientemente de las actualizaciones de las variables
		// de estado
		getUsuarios().then((users) => {
			setUsuarios(users);
		});
	}, []);

	console.log('Antes de entrar al return');
	return (
		<div>
			<ul>
				{usuarios.map((objUsuario) => {
					return <li key={objUsuario.id}>{objUsuario.first_name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Usuarios;
