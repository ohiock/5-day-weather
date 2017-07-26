import React from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import sharedStyles from '../Shared.css';
import styles from './ForecastHeader.css';

const propTypes = {
  weekDay: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  tomorrow: PropTypes.string.isRequired,
};

const ForecastHeader = (props) => {
  let header;

  switch (props.weekDay) {
    case props.today:
      header = 'Today';
      break;
    case props.tomorrow:
      header = 'Tomorrow';
      break;
    default:
      header = props.weekDay;
  }

  return (
    <div styleName="text-center">
      <h2 styleName="day-header">{header}</h2>
    </div>
  );
}

ForecastHeader.propTypes = propTypes;

export default CSSModules(ForecastHeader, Object.assign(sharedStyles, styles));
