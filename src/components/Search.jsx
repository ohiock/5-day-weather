import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Config from '../constants/Config';
import ErrorMessages from '../constants/ErrorMessages';
import ErrorMessage from './ErrorMessage';

import sharedStyles from '../Shared.css';
import styles from './Search.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  searchCallback: PropTypes.func.isRequired,
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      inputError: '',
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
    if (this.state.inputError || !this.isValidInput(this.state.city)) {
      return;
    }

    this.props.searchCallback(this.state.city);
  }

  render() {
    return (
      <div styleName={`container ${this.props.show ? 'show' : 'hide'}`}>
        <div>
          <h1 styleName="call-to-action">Give me the<br /> weather forecast for</h1>
          <ErrorMessage show={!!this.state.inputError} errorMessage={this.state.inputError} />
          <input onChange={this.onChangeCityTextbox} type="text" placeholder="Enter a city" styleName="city-textbox" />
          <button onClick={this.onClickGoButton} styleName="go-button">GO</button>
        </div>
      </div>
    );
  }
}

Search.propTypes = propTypes;

export default CSSModules(Search, Object.assign(sharedStyles, styles), { allowMultiple: true });