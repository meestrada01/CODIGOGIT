import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const { carrito } = useSelector((state) => state);

	return (
		<div className="row">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				<div class="container-fluid">
					<div class="row w-100">
						<div className="col text-end">
							<Link className="btn btn-success" to={'/carrito'}>
								Carrito ({carrito.productos.length})
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
