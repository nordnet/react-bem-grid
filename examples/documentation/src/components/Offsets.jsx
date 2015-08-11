import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class Offsets extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={8} xsOffset={4} sm={6} smOffset={6} lg={12}>
      ...
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <div>
        <Row>
          <Col xs={1} xsOffset={11}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={2} xsOffset={10}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={3} xsOffset={9}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={4} xsOffset={8}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={5} xsOffset={7}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={6} xsOffset={6}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={7} xsOffset={5}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={8} xsOffset={4}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={9} xsOffset={3}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={2}>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs={11} xsOffset={1}>
            <Box />
          </Col>
        </Row>
      </div>
    );

    return (
      <StyleGuideItem
        title="Offsets"
        description="Offset a column"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default Offsets;
