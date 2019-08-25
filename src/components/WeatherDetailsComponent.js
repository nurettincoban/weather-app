import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import icons from '../configs/icons';
import DailyWeatherContainer from './DailyWeatherContainer';
import ToggleComponent from './ToggleComponent';
import { cleanWeather } from '../actions/weather';
import { WeatherDetailsContainer, TopBar, TopLeftBar, BackButton, CityName, WeatherDetailsBox, DateTitle, WeatherTitle, CurrentWeatherBox, WeatherValue, CurrentDayInfoBox } from '../styles/WeatherDetailsStyles';
import { DEFAULT_TIMEZONE } from '../configs/constants';

const WeatherDetailsComponent = (props) => {

	const currentForecast = props.weather.data[0];
	const currentDateTitle = moment.unix(currentForecast.ts, DEFAULT_TIMEZONE).format('dddd, MMMM Do YYYY');
	const currentWeatherValue = currentForecast.weather.description;
	const currentTemp = currentForecast.temp;
	const currentIcon = icons[currentForecast.weather.code].icon;
	const currentMaxTemp = currentForecast.max_temp;
	const currentMinTemp = currentForecast.min_temp;
	const currentWindSpeed = currentForecast.wind_spd;
	const currentWindDirection = currentForecast.wind_dir;

	const cleanState = () => {
		props.cleanWeather();
	};

	return (
		<WeatherDetailsContainer>
			<TopBar>
				<TopLeftBar>
					<BackButton onClick={cleanState} className="material-icons">arrow_back</BackButton>
					<CityName>{ props.weather.city_name }</CityName>
				</TopLeftBar>
				<ToggleComponent />
			</TopBar>
			<WeatherDetailsBox>
				<DateTitle>{ currentDateTitle }</DateTitle>
				<WeatherTitle>{ currentWeatherValue }</WeatherTitle>
				<CurrentWeatherBox>
					<WeatherValue>
						{currentTemp}°{ props.unit }
						<i className={ 'wi wi-' + currentIcon }></i>
					</WeatherValue>
					<CurrentDayInfoBox>
						<li>Min. Temperature<span>{ currentMaxTemp }°F</span></li>
						<li>Max. Temperature<span>{ currentMinTemp }°F</span></li>
						<li>Wind Speed<span>{ currentWindSpeed } m/s</span></li>
						<li>Wind Direction<span>{ currentWindDirection }° Degree</span></li>
					</CurrentDayInfoBox>
				</CurrentWeatherBox>
			</WeatherDetailsBox>
			<DailyWeatherContainer dailyWeathers={props.weather.data} />
		</WeatherDetailsContainer>
	);
};

const mapDispatchToProps = {
	cleanWeather
};

const mapStateToProps = state => {
	return {
		weather: state.weather.forecast,
		unit: state.weather.unit,
		city: state.weather.city,
		position: state.weather.position,
		fetching: state.weather.fetching,
		error: state.weather.error
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailsComponent);