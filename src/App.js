import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
    };

    this.onChangeCityTextbox = this.onChangeCityTextbox.bind(this);
    this.onClickGoButton = this.onClickGoButton.bind(this);
  }

  isValidCityInput(cityInput) {
    const regExResult = /^[a-zA-Z\s]+$/.test(cityInput);
    return cityInput && cityInput.length <= 50 && regExResult;
  }

  onChangeCityTextbox(event) {
    if (!this.isValidCityInput(event.target.value)) {
      console.log('error!');
    }

    this.setState({ city: event.target.value });
  }

  onClickGoButton() {
    console.log(this.state.city);
  }

  render() {
    return (
      <div styleName="call-to-action-container">
        <div>
          <h1 styleName="call-to-action">Give me the weather<br /> forecast for</h1>
          <input onChange={this.onChangeCityTextbox} type="text" placeholder="Enter a city" styleName="city-textbox" />
          <button onClick={this.onClickGoButton} styleName="go-button">GO</button>
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
