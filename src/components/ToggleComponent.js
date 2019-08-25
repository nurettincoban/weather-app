import React from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByCity, fetchWeatherByLatLon } from '../actions/weather';

//<button type="button"> onClick={this.toggle}
const ToggleComponent = (props) => {
  
	const handleChange = () => {
		const newUnit = props.unit === 'C' ? 'F' : 'C';
		if(props.city)
			props.fetchWeatherByCity(props.city, newUnit);
		else
			props.fetchWeatherByLatLon(props.city, newUnit);
	};

	return (
		<div style={{ margin: 20 }}>
			<label className="switch m5">
				<input type="checkbox" checked={props.unit === 'C'} onChange={ handleChange } />
				<small></small>
			</label>
		</div>
	);
};

const mapDispatchToProps = {
	fetchWeatherByCity,
	fetchWeatherByLatLon
};

const mapStateToProps = state => {
	return {
		unit: state.weather.unit,
		city: state.weather.city,
		position: state.weather.position
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleComponent);