import React from 'react';
import { Row, Col, Grid } from 'react-bem-grid';

class GridExample extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} sm={4} lg xsOffset={3} smOffset={4} xsLast smLast>
            <div>Items</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default GridExample;
