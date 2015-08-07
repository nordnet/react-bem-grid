import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class Reversing extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row reverse>
          <Col xs={2}>
            1
          </Col>
          <Col xs={2}>
            2
          </Col>
          <Col xs={2}>
            3
          </Col>
        </Row>
      </Grid>
    );

    const markup = (
      <Row>
        <Col xs={12}>
          <Box container>
            <Row reverse>
              <Col xs={2}>
                <Box nested>1</Box>
              </Col>
              <Col xs={2}>
                <Box nested>2</Box>
              </Col>
              <Col xs={2}>
                <Box nested>3</Box>
              </Col>
              <Col xs={2}>
                <Box nested>4</Box>
              </Col>
              <Col xs={2}>
                <Box nested>5</Box>
              </Col>
              <Col xs={2}>
                <Box nested>6</Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        title="Reversing"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default Reversing;
