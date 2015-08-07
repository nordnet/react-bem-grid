import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class NestedGrids extends React.Component {
  render() {
    const simplifiedMarkup = (
      <Grid>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={6}>
                <Row>
                  <Col xs={4}>
                    ...
                  </Col>
                  <Col xs={4}>
                    ...
                  </Col>
                  <Col xs={4}>
                    ...
                  </Col>
                </Row>
              </Col>
              <Col xs={6}>
              <Row>
                <Col xs={6}>
                  ...
                </Col>
                <Col xs={6}>
                  ...
                </Col>
              </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );

    const markup = (
      <Row>
        <Col xs={7}>
          <Box container>
            <Row>
              <Col xs={9}>
                <Box nested>
                  <Row>
                    <Col xs={4}>
                      <Box nested />
                    </Col>
                    <Col xs={8}>
                      <Box nested />
                    </Col>
                  </Row>
                </Box>
              </Col>
              <Col xs={3}>
                <Box nested>
                  <Row>
                    <Col xs>
                      <Box nested />
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Box>
        </Col>
        <Col xs={5}>
          <Box container>
            <Row>
              <Col xs={12}>
                <Box nested>
                  <Row>
                    <Col xs={6}>
                      <Box nested />
                    </Col>
                    <Col xs={6}>
                      <Box nested />
                    </Col>
                  </Row>
                </Box>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        title="Nested Grids"
        description="Nest grids inside grids inside grids."
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default NestedGrids;
