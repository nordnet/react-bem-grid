import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class DistributionAround extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row xsAround>
          <Col xs={2}>
            ...
          </Col>
          <Col xs={2}>
            ...
          </Col>
          <Col xs={2}>
            ...
          </Col>
        </Row>
      </Grid>
    );

    const markup = (
      <Row xsAround>
        <Col xs={2}>
          <Box />
        </Col>
        <Col xs={2}>
          <Box />
        </Col>
        <Col xs={2}>
          <Box />
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="Around"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default DistributionAround;
