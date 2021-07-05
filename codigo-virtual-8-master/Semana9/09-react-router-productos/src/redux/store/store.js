import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { carritoReducer } from '../reducers/carritoReducer';
import { categoriaReducer } from '../reducers/categoriaReducer';

const reducers = combineReducers({
	carrito: carritoReducer,
	categoria: categoriaReducer
});

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
