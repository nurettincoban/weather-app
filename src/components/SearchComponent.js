import React from 'react';
import { connect } from 'react-redux';

import { fetchWeatherByCity, fetchWeatherByLatLon, updateFetchingStatus, updateErrorMessage } from '../actions/weather';
import { DEFAULT_UNIT } from '../configs/constants';
import { SearchContainer, SearchForm, SearchInput, SearchButton, CurrentPositionButton } from '../styles/SearchComponentStyles';
import { getCurrentPosition } from '../helpers/utils';

class SearchComponent extends React.Component {
  
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleCurrentLocation = this.handleCurrentLocation.bind(this);
		this.handleCurrentLocation = this.handleCurrentLocation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			city: ''
		};
	}

	handleChange (event) {
		this.setState({
			city: event.target.value
		});
	}

	handleSubmit (event) {
		if(this.state.city)
			this.props.fetchWeatherByCity(this.state.city, DEFAULT_UNIT);
		event.preventDefault();
	}

	async handleCurrentLocation () {
		try {
			this.props.updateFetchingStatus(true);
			const { coords } = await getCurrentPosition();
			const { latitude: lat, longitude: lon } = coords;
			this.props.fetchWeatherByLatLon({lat, lon}, DEFAULT_UNIT);
		} catch (error) {console.log(error);
			this.props.updateErrorMessage({
				type: 'error',
				message: error.message
			});
		}
	}

	render(){
		return (
			<SearchContainer>
				<SearchForm>
					<SearchInput type="text" value={this.state.city} onChange={this.handleChange} placeholder="City"/>
					<SearchButton value="Submit" disabled={this.props.fetching} onClick={this.handleSubmit} className="material-icons">search</SearchButton>
				</SearchForm>
				<span>or</span>
				<CurrentPositionButton onClick={this.handleCurrentLocation}>use my <span>current position</span></CurrentPositionButton>
			</SearchContainer>
		);
	}
}

const mapDispatchToProps = {
	fetchWeatherByCity,
	fetchWeatherByLatLon,
	updateFetchingStatus,
	updateErrorMessage
};

const mapStateToProps = state => {
	return {
		fetching: state.weather.fetching
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
