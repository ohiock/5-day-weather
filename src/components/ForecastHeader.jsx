import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
  weekDay: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  tomorrow: PropTypes.string.isRequired,
};

const ForecastHeader = (props) => {
  switch (props.weekDay) {
    case props.today:
      return (<h2>Today</h2>);
    case props.tomorrow:
      return (<h2>Tomorrow</h2>);
    default:
      return (<h2>{props.weekDay}</h2>);
  }
}

ForecastHeader.propTypes = propTypes;

export default ForecastHeader;
