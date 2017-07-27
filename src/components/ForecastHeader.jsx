import React from 'react'
import PropTypes from 'prop-types';

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
    <div className={sharedStyles.textCenter}>
      <h2 className={styles.dayHeader}>{header}</h2>
    </div>
  );
}

ForecastHeader.propTypes = propTypes;

export default ForecastHeader;
