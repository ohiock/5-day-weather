import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import ErrorMessages from './constants/ErrorMessages';
import WeatherService from './services/WeatherService';

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
    const regExResult = /^[a-zA-Z\s]+$/.test(input);
    return input.length <= 50 && regExResult;
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
      // prevent submission
    }

    const weatherForecast = WeatherService.getWeatherForecast(this.state.city);

    this.setState({ weatherForecast });
  }

  render() {
    return (
      <div styleName="call-to-action-container">
        <div>
          <h1 styleName="call-to-action">Give me the weather<br /> forecast for</h1>
          <p styleName="error-message" style={!this.state.inputError ? { display: 'none' } : {}}>
            {this.state.inputError}
          </p>
          <input onChange={this.onChangeCityTextbox} type="text" placeholder="Enter a city" styleName="city-textbox" />
          <button onClick={this.onClickGoButton} styleName="go-button">GO</button>
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
