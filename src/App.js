import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import OpenWeatherAPI from './api/OpenWeatherAPI';
import WeatherModel from './models/WeatherForecastModel';
import Search from './components/Search';
import WeatherForecast from './components/WeatherForecast';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCurrentlySearching: true,
      searchError: false,
      weatherForecast: {
        city: '',
        days: [],
      },
    };
  }

  updateWeatherForecast(city, openWeatherAPI) {
    openWeatherAPI.getWeatherForecast(city)
      .then((response) => {
        if (!response || response.status !== 200) {
          this.setState({ isCurrentlySearching: false, searchError: true });
        }

        const weatherModel = new WeatherModel(response.data);

        this.setState({ isCurrentlySearching: false, weatherForecast: weatherModel });
      })
      .catch((error) => {
        console.log(error);

        this.setState({ isCurrentlySearching: false, searchError: true });
      });
  }

  render() {
    return (
      <div styleName="fill">
        <Search searchCallback={city => this.updateWeatherForecast(city, OpenWeatherAPI)} show={this.state.isCurrentlySearching} />
        <WeatherForecast weatherForecast={this.state.weatherForecast} show={!this.state.isCurrentlySearching} />
      </div>
    );
  }
}

export default CSSModules(App, styles);
