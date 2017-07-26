import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import sharedStyles from '../Shared.css';
import styles from './WeatherForecast.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  weatherForecast: PropTypes.object.isRequired,
};

class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Grid styleName={this.props.show ? 'show' : 'hide'}>
        <Row>
          <Col styleName="text-center">
            <h1 styleName="weather-forecast-title">5 Day Weather Forecast for {this.props.weatherForecast.city}</h1>
            <Row>
              <Col md={2}>Today</Col>
              <Col md={2}>Tomorrow</Col>
              <Col md={2}>Three</Col>
              <Col md={2}>Four</Col>
              <Col md={2}>Five</Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

WeatherForecast.propTypes = propTypes;

export default CSSModules(WeatherForecast, Object.assign(sharedStyles, styles));
