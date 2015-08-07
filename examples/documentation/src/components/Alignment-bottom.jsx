import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class AlignmentBottom extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row xsBottom>
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
      <Row xsBottom>
        <Col xs={6}>
          <Box style={ {minHeight: '6rem'} } />
        </Col>
        <Col xs={6}>
          <Box />
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="Bottom"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentBottom;
