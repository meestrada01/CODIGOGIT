import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminProductos from './pages/AdminProductos';
import AdminProductosCrear from './pages/AdminProductosCrear';

const AdminRouter = () => {
	return (
		<>
			<AdminHeader />
			<Switch>
				<Route path="/admin/productos/crear" component={AdminProductosCrear} />
				<Route path="/admin/productos" component={AdminProductos} />
			</Switch>
		</>
	);
};

export default AdminRouter;
