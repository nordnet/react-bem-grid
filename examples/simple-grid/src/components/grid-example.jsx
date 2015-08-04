import React from 'react';
import { Row, Col, Grid } from 'react-bem-grid';

class GridExample extends React.Component {
  render() {
    const boxStyle = {
      background: '#00A8EF',
      marginBottom: '16px',
      width: '100%',
      height: '32px'
    };

    return (
      <Grid fluid>
        <Row componentClass='nav'>
          <Col xs={4}>
            <div style={ boxStyle }></div>
          </Col>
          <Col xs={4} xsOffset={4}>
            <div style={ boxStyle }></div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
            <div style={ boxStyle }></div>
          </Col>
          <Col xs={6} sm={6} md={8} lg={10}>
            <div style={ boxStyle }></div>
          </Col>
          <Col xs={6} sm={3} md={2} lg={1}>
            <div style={ boxStyle }></div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
            <div style={ boxStyle }></div>
          </Col>
          <Col xs={12} sm={9} md={10} lg={11}>
            <div style={ boxStyle }></div>
          </Col>
        </Row>

        <Row>
          <Col xs={10} sm={6} md={8} lg={10}>
            <div style={ boxStyle }></div>
          </Col>
          <Col xs={2} sm={6} md={4} lg={2}>
            <div style={ boxStyle }></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GridExample;
