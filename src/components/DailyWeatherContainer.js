import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { DailyWeathers } from '../styles/DailyWeatherStyles';
import DailyWeatherComponent from './DailyWeatherComponent';
import icons from '../configs/icons';
import { DEFAULT_TIMEZONE } from '../configs/constants';

const DailyWeatherContainer = (props) => {
	const dailyWeathers = props.dailyWeathers.map((weather) => {
		const currentDateTitle = moment.unix(weather.ts, DEFAULT_TIMEZONE).format('dddd');
		const weatherIcon = icons[weather.weather.code].icon;
		const currentTemp = weather.temp;
		return <DailyWeatherComponent 
			key={weather.ts} 
			day={currentDateTitle}
			icon={weatherIcon}
			temp={currentTemp} />;
	});

	return (
		<DailyWeathers>
			{dailyWeathers}
		</DailyWeathers>
	);
};

DailyWeatherContainer.propTypes = {
	dailyWeathers: PropTypes.array
};

export default DailyWeatherContainer;