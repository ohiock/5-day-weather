import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Config from './constants/Config';
import ErrorMessages from './constants/ErrorMessages';
import WeatherService from './services/WeatherService';

import ErrorMessage from './components/ErrorMessage';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      inputError: '',
      weatherForecast: {},
    };

    this.onChangeCityTextbox = this.onChangeCityTextbox.bind(this);
    this.onClickGoButton = this.onClickGoButton.bind(this);
  }

  isValidInput(input) {
    const regExResult = Config.CITY_INPUT_REGEX.test(input);
    return input.length <= Config.CITY_INPUT_CHARACTER_LENGTH && regExResult;
  }

  onChangeCityTextbox(event) {
    const input = event.target.value.trim();

    if (!this.isValidInput(input)) {
      this.setState({ inputError: ErrorMessages.INVALID_CITY_INPUT });

      return;
    }

    this.setState({ city: input, inputError: '' });
  }

  onClickGoButton() {
    if (this.state.inputError) {
      return;
    }

    const weatherForecast = WeatherService.getWeatherForecast(this.state.city);

    this.setState({ weatherForecast });
  }

  render() {
    return (
      <div styleName="call-to-action-container">
        <div>
          <h1 styleName="call-to-action">Give me the weather<br /> forecast for</h1>
          <ErrorMessage show={!!this.state.inputError} errorMessage={this.state.inputError} />
          <input onChange={this.onChangeCityTextbox} type="text" placeholder="Enter a city" styleName="city-textbox" />
          <button onClick={this.onClickGoButton} styleName="go-button">GO</button>
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
