import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Grid>
          <Row>
            <Col md={2}>Hello</Col>
            <Col md={10}>There</Col>
          </Row>
        </Grid>
        5 Day Weather
      </div>
    );
  }
}

export default App;
