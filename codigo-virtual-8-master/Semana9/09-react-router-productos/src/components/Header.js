import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div
				className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
				style={{ width: '280px' }}
			>
				<NavLink
					to={'/'}
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
				>
					<span className="fs-4">Sidebar</span>
				</NavLink>
				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<NavLink to={'/productos'} className="nav-link text-white">
							Productos
						</NavLink>
					</li>
					<li>
						<NavLink to={'/carrito'} className="nav-link text-white">
							Dashboard
						</NavLink>
					</li>
				</ul>
				<hr />
				<div className="dropdown">
					<a
						href="#"
						className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://github.com/mdo.png"
							alt=""
							width="32"
							height="32"
							className="rounded-circle me-2"
						/>
						<strong>mdo</strong>
					</a>
					<ul
						className="dropdown-menu dropdown-menu-dark text-small shadow"
						aria-labelledby="dropdownUser1"
					>
						<li>
							<a className="dropdown-item" href="#">
								New project...
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Settings
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Profile
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
