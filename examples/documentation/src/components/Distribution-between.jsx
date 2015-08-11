import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class DistributionBetween extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row xsBetween>
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
</Grid>`;

    const markup = (
      <Row xsBetween>
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
        subTitle="Between"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default DistributionBetween;
