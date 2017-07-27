import React from 'react'
import PropTypes from 'prop-types';

import sharedStyles from '../Shared.css';
import styles from './ErrorMessage.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const ErrorMessage = (props) => {
  return (
    <p className={`${styles.errorMessage} ${props.show ? sharedStyles.show : sharedStyles.hide}`} >
      {props.errorMessage}
    </p>
  );
};

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
