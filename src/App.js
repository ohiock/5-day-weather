import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      inputError: '',
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
      this.setState({ inputError: 'Please enter a valid city. It must be composed of only alphabetical letters and less than 50 chracters in length.' });

      return;
    }

    this.setState({ city: input, inputError: '' });
  }

  onClickGoButton() {
    if (this.state.inputError) {
      // prevent submission
    }

    // submit
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
