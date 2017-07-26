import React from 'react'
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import sharedStyles from '../Shared.css';
import styles from './ErrorMessage.css';

const propTypes = {
  show: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const ErrorMessage = (props) => {
  return (
    <p styleName={`error-message ${props.show ? 'show' : 'hide'}`} >
      {props.errorMessage}
    </p>
  );
};

ErrorMessage.propTypes = propTypes;

export default CSSModules(ErrorMessage, Object.assign(sharedStyles, styles), { allowMultiple: true });
