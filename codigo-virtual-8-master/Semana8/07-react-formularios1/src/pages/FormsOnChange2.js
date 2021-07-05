import React, { useState } from 'react';

const FormsOnChange2 = () => {
	const [formulario, setFormulario] = useState({
		nombre: 'Katia',
		email: ''
	});

	const handleChange = (e) => {
		let objTemporal = {
			...formulario,
			[e.target.name]: e.target.value
		};
		setFormulario(objTemporal);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formulario);
	};

	return (
		<>
			<h1 className="display-4">Usando la función onChange</h1>
			<hr />
			<main className="container">
				<div className="row justify-content-center">
					<div className="col-5">
						<div className="card shadow">
							<div className="card-body">
								<form onSubmit={handleSubmit}>
									<div>
										<label htmlFor="inputNombre">Nombres:</label>
										<input
											type="text"
											id="inputNombre"
											className="form-control"
											value={formulario.nombre}
											onChange={handleChange}
											name="nombre"
										/>
										<small>Caracteres: {formulario.nombre.length}</small>
									</div>
									<div>
										<label htmlFor="inputEmail">Email:</label>
										<input
											name="email"
											type="email"
											id="inputEmail"
											className="form-control"
											value={formulario.email}
											onChange={handleChange}
										/>
									</div>
									<button className="btn btn-primary" type="submit">
										Guardar Cambios
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default FormsOnChange2;
