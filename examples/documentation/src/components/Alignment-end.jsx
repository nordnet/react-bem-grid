import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class AlignmentEnd extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={12}>
      <Row xsEnd>
        <Col xs={6}>
          ...
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <Row>
        <Col xs={12}>
          <Box container>
            <Row xsEnd>
              <Col xs={6}>
                <Box nested />
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="End"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentEnd;
