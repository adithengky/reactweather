import axios from 'axios';

const API_KEY = '3ddf9a1ab09e8eca6ba7d1e907000ebe';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;

	return axios.get(url).then((response) => {
		if(response.data.city.name.toLowerCase() == city) {
			return {
				type: FETCH_WEATHER,
				payload: response
			}
		} else {
			return {
				type: 'ERROR',
				message: 'Location not defined'
			}
		}
	}).catch((error) => {
		return {
			type: 'ERROR',
			message: error.message
		}
	});
}

export function amazing(city) {
	return {
		type: 'NOT_DEFINED'
	};
}

String.prototype.toUpperCaseFirst = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}