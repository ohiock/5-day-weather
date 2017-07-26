import React from 'react'
import PropTypes from 'prop-types';

import clear from '../images/1.svg';
import fewClouds from '../images/2.svg';
import scatteredClouds from '../images/3.svg';
import showers from '../images/4.svg';
import rain from '../images/5.svg';
import storms from '../images/6.svg';
import mist from '../images/7.svg';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

const ForecastIcon = (props) => {
  const iconImages = {
    '01d': clear,
    '01n': clear,
    '02d': fewClouds,
    '02n': fewClouds,
    '03d': scatteredClouds,
    '03n': scatteredClouds,
    '04d': scatteredClouds,
    '04n': scatteredClouds,
    '09d': showers,
    '09n': showers,
    '10d': rain,
    '10n': rain,
    '11d': storms,
    '11n': storms,
    '13d': showers,
    '13n': showers,
    '50d': mist,
    '50n': mist,
  };

  return (
    <div><img alt="weather icon" src={iconImages[props.icon]} /></div>
  )
}

ForecastIcon.propTypes = propTypes;

export default ForecastIcon
