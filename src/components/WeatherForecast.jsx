import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import moment from 'moment';

import ForecastHeader from './ForecastHeader';

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
              {
                this.props.weatherForecast.days
                  .map(day => (
                    <Col md={2} key={day.date}>
                      <ForecastHeader
                        weekDay={moment.unix(day.date).format('dddd')}
                        today={moment().format('dddd')}
                        tomorrow={moment().add(1, 'days').format('dddd')} />
                      { `${day.temp}°` }
                    </Col>
                  ))
              }
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

WeatherForecast.propTypes = propTypes;

export default CSSModules(WeatherForecast, Object.assign(sharedStyles, styles));
