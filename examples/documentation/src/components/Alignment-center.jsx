import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class AlignmentCenter extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={12}>
      <Row xsCenter>
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
            <Row xsCenter>
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
        subTitle="Center"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentCenter;
