import { 
	FETCH_WEATHER_FULFILLED, 
	FETCH_WEATHER_REJECTED, 
	FETCH_WEATHER_PENDING, 
	FETCH_WEATHER_CLEAN,
	UPDATE_CITY,
	UPDATE_UNIT,
	UPDATE_POSITION,
	FETCH_WEATHER_ERROR,
	UPDATE_FETCHING_STATUS
} from '../actions/weather';
import { DEFAULT_UNIT } from '../configs/constants';

const initialState = {
	fetching: false,
	error: null,
	forecast: null,
	unit: DEFAULT_UNIT,
	city: null,
	position: {}
};

export default (state = initialState, action) => {
	switch (action.type){
	case FETCH_WEATHER_FULFILLED:
		return {
			...state,
			forecast: action.payload,
			fetching: false,
			error: initialState.error
		};
	case FETCH_WEATHER_PENDING:
		return {
			...state,
			fetching: true,
			error: initialState.error
		};
	case FETCH_WEATHER_REJECTED:
		return {
			...initialState,
			error: action.payload,
		};
	case FETCH_WEATHER_ERROR:
		return {
			...initialState,
			error: action.payload,
		};
	case FETCH_WEATHER_CLEAN:
		return {
			...state,
			forecast: initialState.data
		};
	case UPDATE_UNIT:
		return {
			...state,
			unit: action.payload
		};
	case UPDATE_CITY:
		return {
			...state,
			city: action.payload,
			position: initialState.position
		};
	case UPDATE_POSITION:
		return {
			...state,
			position: action.payload,
			city: initialState.city
		};
	case UPDATE_FETCHING_STATUS:
		return {
			...state,
			fetching: action.payload
		};
	default:
		return state;
	}
};