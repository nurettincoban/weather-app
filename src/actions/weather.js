import axios from 'axios';
import { DAILY_FORECAST_API_BASE } from '../configs/env';

export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';
export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED';
export const FETCH_WEATHER_CLEAN = 'FETCH_WEATHER_CLEAN';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_POSITION = 'UPDATE_POSITION';
export const UPDATE_UNIT = 'UPDATE_UNIT';
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
export const UPDATE_FETCHING_STATUS = 'UPDATE_FETCHING_STATUS';

export const fetchWeatherByCity = (city, unit) => {
	return async dispatch => {
		let statusCode;
		const apiEndpoint = `${DAILY_FORECAST_API_BASE}?city=${city}&units=${unit}&days=7&key=${process.env.REACT_APP_WEATHERBIT_KEY}`;
		await dispatch({
			type: 'FETCH_WEATHER',
			payload: axios.get(apiEndpoint).then(result => {
				statusCode = result.status;
				return result.data;
			})
		});
		if(statusCode === 200){
			dispatch({
				type: UPDATE_CITY,
				payload: city
			});
			dispatch({
				type: UPDATE_UNIT,
				payload: unit
			});
		}else if(statusCode === 204){
			dispatch({
				type: FETCH_WEATHER_ERROR,
				payload: {
					type: 'warning',
					message: 'Could Not Find Forecast Data For Given City!'
				}
			});
		}else{
			dispatch({
				type: FETCH_WEATHER_ERROR,
				payload: {
					type: 'error',
					message: 'Something Went Wrong Please Try Again!'
				}
			});
		}
	};
};

export const fetchWeatherByLatLon = (position, unit) => {
	const { lat, lon } = position;
	return async dispatch => {
		let statusCode;
		const apiEndpoint = `${DAILY_FORECAST_API_BASE}?lat=${lat}&lon=${lon}&units=${unit}&days=7&key=${process.env.REACT_APP_WEATHERBIT_KEY}`;
		await dispatch({
			type: 'FETCH_WEATHER',
			payload: axios.get(apiEndpoint)
				.then(result => {
					statusCode = result.status;
					return result.data;
				})
		});
		if(statusCode === 200){
			dispatch({
				type: UPDATE_POSITION,
				payload: position
			});
			dispatch({
				type: UPDATE_UNIT,
				payload: unit
			});
		}
	};
};

export const updateFetchingStatus = (status) => {
	return dispatch => {
		dispatch({
			type: UPDATE_FETCHING_STATUS,
			payload: status
		});
	};
};

export const updateErrorMessage = (message) => {
	return dispatch => {
		dispatch({
			type: FETCH_WEATHER_ERROR,
			payload: message
		});
	};
};

export const cleanWeather = () => {
	return dispatch => {
		dispatch({
			type: FETCH_WEATHER_CLEAN,
		});
	};
};