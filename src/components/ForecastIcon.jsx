import React from 'react'
import PropTypes from 'prop-types';

import sun from '../images/sun.svg';
import fullMoon from '../images/full-moon.svg';
import cloudySun from '../images/cloudy.svg';
import cloudyMoon from '../images/cloudy-night.svg';
import cloud from '../images/cloud.svg';
import cloudy from '../images/cloudy-1.svg';
import rain from '../images/rain-1.svg';
import rainySun from '../images/rainy.svg';
import rainyMoon from '../images/rainy-1.svg';
import storms from '../images/rainy.svg';
import snow from '../images/snowflake.svg';
import mist from '../images/wind.svg';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

const ForecastIcon = (props) => {
  const iconImages = {
    '01d': sun,
    '01n': fullMoon,
    '02d': cloudySun,
    '02n': cloudyMoon,
    '03d': cloud,
    '03n': cloud,
    '04d': cloudy,
    '04n': cloudy,
    '09d': rain,
    '09n': rain,
    '10d': rainySun,
    '10n': rainyMoon,
    '11d': storms,
    '11n': storms,
    '13d': snow,
    '13n': snow,
    '50d': mist,
    '50n': mist,
  };

  return (
    <div><img styleName="icon" alt="weather icon" src={iconImages[props.icon]} /></div>
  )
}

ForecastIcon.propTypes = propTypes;

export default ForecastIcon;
