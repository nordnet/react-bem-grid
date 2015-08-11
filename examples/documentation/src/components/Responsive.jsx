import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class Responsive extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={12} sm={8} md={6} lg={4}>
      ...
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <div>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
              <Box />
          </Col>
          <Col xs={6} sm={6} md={8} lg={10}>
              <Box />
          </Col>
          <Col xs={6} sm={3} md={2} lg={1}>
              <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
              <Box />
          </Col>
          <Col xs={12} sm={9} md={10} lg={11}>
              <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={10} sm={6} md={8} lg={10}>
              <Box />
          </Col>
          <Col xs={2} sm={6} md={4} lg={2}>
              <Box />
          </Col>
        </Row>
      </div>
    );

    return (
      <StyleGuideItem
        title="Responsive"
        description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths."
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default Responsive;
