import React from 'react';
import { useState } from 'react';
const Contador = () => {
	const [numero, setNumero] = useState(0);
	// Crear un tercer botón para resetar el valor
	// del numero a 0 nuevamente
	const clickSumar = () => {
		setNumero(numero + 1);
	};
	const clickRestar = () => {
		setNumero(numero - 1);
	};
	const clickReset = () => {
		setNumero(0);
	};
	return (
		<div>
			<button onClick={clickReset}>Reset</button>
			<button onClick={clickRestar}>-1</button>
			<span>{numero}</span>
			<button onClick={clickSumar}>+1</button>
			<strong>{numero}</strong>
		</div>
	);
};
export default Contador;
