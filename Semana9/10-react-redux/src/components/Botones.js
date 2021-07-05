import React from 'react';
import { useDispatch } from 'react-redux';
import { restarBalance, sumarBalance } from '../actions/balanceAction';
import { AGREGAR_DINERO, RESTAR_DINERO } from '../types/types';

const Botones = () => {
	const dispatch = useDispatch();

	const agregar10lucas = () => {
		dispatch(sumarBalance(10));
	};

	const restar10lucas = () => {
		dispatch(restarBalance(10));
	};

	return (
		<div>
			<button onClick={agregar10lucas}>Agregar 10 lucas</button>
			<button onClick={restar10lucas}>Restar 10 lucas</button>
		</div>
	);
};

export default Botones;
