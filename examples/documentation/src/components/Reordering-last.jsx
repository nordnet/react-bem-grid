import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class ReorderingLast extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={4} xsLast>
      1
    </Col>
    <Col xs={4}>
      2
    </Col>
    <Col xs={4}>
      3
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <Row>
        <Col xs={4} xsLast>
          <Box>1</Box>
        </Col>
        <Col xs={4}>
          <Box>2</Box>
        </Col>
        <Col xs={4}>
          <Box>3</Box>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="Last"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default ReorderingLast;
