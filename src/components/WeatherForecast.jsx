import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import sharedStyles from '../Shared.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
};

class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div styleName={this.props.show ? 'show' : 'hide'}>
        <h1>Weather Forecast</h1>
      </div>
    );
  }
}

WeatherForecast.propTypes = propTypes;

export default CSSModules(WeatherForecast, sharedStyles);
