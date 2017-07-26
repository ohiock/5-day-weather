import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import WeatherService from './services/WeatherService';
import Search from './components/Search';
import WeatherForecast from './components/WeatherForecast';

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

    this.setState({ isCurrentlySearching: false, city, weatherForecast });
  }

  render() {
    return (
      <div styleName="fill">
        <Search searchCallback={city => this.updateWeatherForecast(city)} show={this.state.isCurrentlySearching} />
        <WeatherForecast weatherForecast={this.state.weatherForecast} show={!this.state.isCurrentlySearching} />
      </div>
    );
  }
}

export default CSSModules(App, styles);
