import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import WeatherService from './services/WeatherService';
import Search from './components/Search';
import Forecast from './components/Forecast';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCurrentlySearching: true,
      city: '',
      weatherForecast: {},
    };
  }

  updateWeatherForecast(city) {
    const weatherForecast = WeatherService.getWeatherForecast(city);

    this.setState({ city, weatherForecast });
  }

  render() {
    return (
      <div>
        { this.state.isCurrentlySearching && <Search searchCallback={city => this.updateWeatherForecast(city)} /> }
        { !this.state.isCurrentlySearching && <Forecast />}
      </div>
    );
  }
}

export default CSSModules(App, styles);
