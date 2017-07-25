import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div styleName="call-to-action-container">
        <div>
          <h1 styleName="call-to-action">Give me the weather<br /> report for</h1>
          <input type="text" placeholder="Enter a city" />
        </div>
      </div>
    );
  }
}

export default CSSModules(App, styles);
