import React, { useState } from 'react';

let cursos = [
	{ id: 1, nombre: 'Algoritmos' },
	{ id: 2, nombre: 'Bases De Datos' },
	{ id: 3, nombre: 'Diseño de Interfaces' }
];

let cursosState = cursos.map((curso) => {
	return {
		...curso,
		seleccionado: false,
		name: curso.nombre.toLowerCase().split(' ').join('')
	};
});

const FormsOnChange4 = () => {
	const [checkboxes, setCheckboxes] = useState(cursosState);

	const handleChange = (e) => {
		// sacar una copia del arreglo del estado para no manpularlo
		// directamente
		let copiaChecks = [...checkboxes];
		// busco la posición en la que se encuetra el checkbox que acaba
		// de ser afectado o clickado
		let posicion = copiaChecks.findIndex(
			(check) => check.name === e.target.name
		);
		// modificar el checkbox que ocupa la posición encontrada
		// con el nuevo valor en su estado seleccionado
		copiaChecks[posicion].seleccionado = e.target.checked;
		setCheckboxes(copiaChecks);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let arregloFinal = checkboxes.map((curso) => {
			return {
				id: curso.id,
				nombre: curso.nombre,
				checked: curso.seleccionado
			};
		});
		console.log(arregloFinal);
	};

	return (
		<>
			<h1 className="display-4">Mostrasndo checkboxes desde un arreglo</h1>
			<hr />
			<main className="container">
				<div className="row justify-content-center">
					<div className="col-5">
						<div className="card shadow">
							<div className="card-body">
								<form onSubmit={handleSubmit}>
									{checkboxes.map((curso) => {
										return (
											<p key={curso.name}>
												<label htmlFor="">{curso.nombre}</label>
												<input
													type="checkbox"
													id=""
													checked={curso.seleccionado}
													name={curso.name}
													onChange={handleChange}
												/>
											</p>
										);
									})}

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

export default FormsOnChange4;
