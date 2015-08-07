import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class AlignmentMiddle extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row xsMiddle>
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
      <Row xsMiddle>
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
        subTitle="Middle"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentMiddle;
