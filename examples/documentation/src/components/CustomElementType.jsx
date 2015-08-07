import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class CustomElementType extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row componentClass='nav'>
          <Col xs={6}>
            ...
          </Col>
          <Col xs={6}>
            ...
          </Col>
        </Row>
      </Grid>
    );

    const markup = (
      <Row componentClass='nav'>
        <Col xs={6}>
          <Box />
        </Col>
        <Col xs={6}>
          <Box />
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        title="Custom Element Type"
        description="Add the componentClass property to override the default element type of a Grid, Row or Col."
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default CustomElementType;
