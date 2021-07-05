import React from 'react';
import './styles/header.css';
const Header = (props) => {
	return (
		<header className="sombra">
			{props.texto} - {props.fecha}
		</header>
	);
};

export default Header;
