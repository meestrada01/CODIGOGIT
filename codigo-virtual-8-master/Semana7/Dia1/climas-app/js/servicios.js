const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f216cdc5ffb3839b7ebdb07394220bc1';

export const getClimaByCiudad = async (ciudad) => {
	const endpoint = `${BASE_URL}?q=${ciudad}&appid=${API_KEY}&units=metric`;
	const response = await fetch(endpoint);
	const rpta = await response.json();
	return rpta;
};
