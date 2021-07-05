import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
	const autenticado = false;

	if (autenticado) {
		return <Route path={props.path} component={props.component} />;
	} else {
		return <Redirect to={'/'} />;
	}
};

export default PrivateRoute;
