import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { AppBox, Container } from '../styles/AppContainerStyles';
import SearchComponent from './SearchComponent';
import WeatherDetailsComponent from './WeatherDetailsComponent';
import { fetchWeatherByCity, fetchWeatherByLatLon } from '../actions/weather';
import MessageComponent from './MessageComponent';
import LoadingIndicator from './LoadingIndicator';

class AppContainer extends React.Component {
  
	constructor(props) {
		super(props);
		if(this.props.weather){
			const validDate = moment(this.props.weather.data[0].valid_date);
			if(moment().diff(validDate, 'days')){
				if(this.props.city){
					this.props.fetchWeatherByCity(this.props.city, this.props.unit);
				}else{
					this.props.fetchWeatherByLatLon(this.props.position, this.props.unit);
				}
			}
		}
	}

	render() {
		let currentView;
		if(this.props.weather){
			currentView = <WeatherDetailsComponent />;
		}
		else{
			currentView = <SearchComponent />;
		}

		return (
			<Container>
				<AppBox>
					{ this.props.fetching ? <LoadingIndicator /> : null }
					{ this.props.error ? 
						<MessageComponent 
							type={this.props.error.type}
							message={this.props.error.message} 
						/> : null 
					}
					{ currentView }
				</AppBox>
			</Container>
		);
	}
}

const mapDispatchToProps = {
	fetchWeatherByCity,
	fetchWeatherByLatLon
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);