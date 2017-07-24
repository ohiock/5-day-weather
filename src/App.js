import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Grid styleName="fill">
        <Row styleName="fill">
          <Col mdOffset={2} md={8} styleName="fill">
            <div styleName="call-to-action-container">
              <div>
                <h1 styleName="call-to-action">Give me the weather report for</h1>
                <input type="text" placeholder="Enter a city" />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CSSModules(App, styles);
