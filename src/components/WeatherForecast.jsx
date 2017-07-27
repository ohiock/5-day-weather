import React from 'react';
import PropTypes from 'prop-types';
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

const WeatherForecast = (props) => (
  <Grid fluid className={props.show ? sharedStyles.show : sharedStyles.hide}>
    <Row>
      <Col lg={12}>
        <div className={sharedStyles.textCenter}>
          <h1 className={styles.forecastTitle}>5 Day Weather Forecast<br /> for {props.weatherForecast.city}</h1>
        </div>
        <Row>
          {
            props.weatherForecast.days
              .map((day, i) => (
                <Col xs={6} mdOffset={i === 0 ? 1 : 0} md={2} key={day.date} className={`${styles.forecastDay} ${styles[`background${i}`]}`}>
                  <ForecastHeader
                    weekDay={moment.unix(day.date).format('dddd')}
                    today={moment().format('dddd')}
                    tomorrow={moment().add(1, 'days').format('dddd')} />
                  <div className={`${sharedStyles.textCenter} ${styles.icon}`}><ForecastIcon icon={day.icon} /></div>
                  <div className={styles.temp}>{ `${day.temp}°` }</div>
                  <div className={styles.condition}>{ day.condition }</div>
                  <div>{ day.description }</div>
                </Col>
              ))
          }
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className={`${styles.goBackContainer} ${sharedStyles.textCenter}`} onClick={props.goBackCallback}>
          <span className={styles.goBackButton}>Search Again</span>
        </div>
      </Col>
    </Row>
  </Grid>
);

WeatherForecast.propTypes = propTypes;

export default WeatherForecast;
