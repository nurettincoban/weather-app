import React from 'react';
import { DailyWeatherBox, DayTitle, DayValue, WeatherIcon } from '../styles/DailyWeatherStyles';
import PropTypes from 'prop-types';

const DailyWeatherComponent = (props) => {
	return (
		<DailyWeatherBox>
			<DayTitle>{ props.day }</DayTitle>
			<WeatherIcon className={ 'wi wi-' + props.icon }></WeatherIcon>
			<DayValue>{ props.temp }°C</DayValue>
		</DailyWeatherBox>
	);
};

DailyWeatherComponent.propTypes = {
	day: PropTypes.string,
	icon: PropTypes.string,
	temp: PropTypes.number
};

export default DailyWeatherComponent;