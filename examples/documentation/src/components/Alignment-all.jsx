import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class AlignmentAll extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={12}>
      <Row xsCenter smEnd lgStart>
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
            <Row xsCenter smEnd lgStart>
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
        description="Here is an example of using the modifiers in conjunction to achieve different alignment at different viewport sizes."
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentAll;
