import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={4} md={4} styleName="app">
            5 Day Weather
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CSSModules(App, styles);
