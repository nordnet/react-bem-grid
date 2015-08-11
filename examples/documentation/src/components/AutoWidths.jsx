import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class AutoWidths extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs>
      ...
    </Col>
    <Col xs>
      ...
    </Col>
    <Col xs>
      ...
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <div>
        <Row>
          <Col xs>
            <Box />
          </Col>
          <Col xs>
            <Box />
          </Col>
        </Row>
        <Row>
          <Col xs>
            <Box />
          </Col>
          <Col xs>
            <Box />
          </Col>
          <Col xs>
            <Box />
          </Col>
        </Row>
      </div>
    );

    return (
      <StyleGuideItem
        title="Auto Widths"
        description="Add any number of auto sizing columns to a row. Let the grid figure it out."
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AutoWidths;
