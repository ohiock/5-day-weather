import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import moment from 'moment';

import ForecastHeader from './ForecastHeader';
import ForecastIcon from './ForecastIcon';

import sharedStyles from '../Shared.css';
import styles from './WeatherForecast.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  weatherForecast: PropTypes.object.isRequired,
  goBackCallback: PropTypes.func.isRequired,
};

class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Grid fluid styleName={this.props.show ? 'show' : 'hide'}>
        <Row>
          <Col lg={12}>
            <div styleName="text-center">
              <h1 styleName="forecast-title">5 Day Weather Forecast<br /> for {this.props.weatherForecast.city}</h1>
            </div>
            <Row>
              {
                this.props.weatherForecast.days
                  .map((day, i) => (
                    <Col mdOffset={i === 0 ? 1 : 0} md={2} key={day.date} styleName={`forecast-day background-${i}`}>
                      <ForecastHeader
                        weekDay={moment.unix(day.date).format('dddd')}
                        today={moment().format('dddd')}
                        tomorrow={moment().add(1, 'days').format('dddd')} />
                      <div styleName="text-center icon"><ForecastIcon icon={day.icon} /></div>
                      <div styleName="temp">{ `${Math.round(day.temp)}°` }</div>
                      <div styleName="condition">{ day.condition }</div>
                      <div>{ day.description }</div>
                    </Col>
                  ))
              }
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <div styleName="go-back-container text-center" onClick={this.props.goBackCallback}>
              <span styleName="go-back-button">Search Again</span>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

WeatherForecast.propTypes = propTypes;

export default CSSModules(WeatherForecast, Object.assign(sharedStyles, styles), { allowMultiple: true });
