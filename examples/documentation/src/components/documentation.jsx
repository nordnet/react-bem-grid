import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import './documentation.scss';

import Responsive from './Responsive';
import Offsets from './Offsets';
import AutoWidths from './AutoWidths';
import NestedGrids from './NestedGrids';
import CustomElementType from './CustomElementType';
import AlignmentStart from './Alignment-start';
import AlignmentCenter from './Alignment-center';
import AlignmentEnd from './Alignment-end';
import AlignmentAll from './Alignment-all';
import AlignmentTop from './Alignment-top';
import AlignmentMiddle from './Alignment-middle';
import AlignmentBottom from './Alignment-bottom';
import DistributionAround from './Distribution-around';
import DistributionBetween from './Distribution-between';
import ReorderingFirst from './Reordering-first';
import ReorderingLast from './Reordering-last';
import Reversing from './Reversing';

class Documentation extends React.Component {
  renderHeader() {
    return (
      <header className="documentation__header">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <h1>React BEM Grid</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p>A React component for a BEM grid based on <a href="http://flexboxgrid.com/">Flexbox Grid</a></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={4} smOffset={2} lg={3} lgOffset={3}>
              <a href="https://www.npmjs.com/package/react-bem-grid" className="btn btn--primary">NPM</a>
            </Col>
            <Col xs={6} sm={4} lg={3}>
              <a href="https://github.com/nordnet/react-bem-grid" className="btn btn--primary">Github</a>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }

        <Grid style={{
            boxSizing: 'border-box',
            margin: '0 auto',
            padding: '0 1rem'
          }}>

          <Responsive />

          <hr />

          <Offsets />

          <hr />

          <AutoWidths />

          <hr />

          <NestedGrids />

          <hr />

          <CustomElementType />

          <hr />

          <h2>Alignment</h2>
          <p>Add properties to align elements to the start or end of a row as well as the top, bottom, or center of a column.</p>
          <AlignmentStart />
          <AlignmentCenter />
          <AlignmentEnd />
          <AlignmentAll />
          <AlignmentTop />
          <AlignmentMiddle />
          <AlignmentBottom />

          <hr />

          <h2>Distribution</h2>
          <p>Add properties to distribute the contents of a row or column.</p>
          <DistributionAround />
          <DistributionBetween />

          <hr />

          <h2>Reordering</h2>
          <p>Add properties to reorder columns.</p>
          <ReorderingFirst />
          <ReorderingLast />

          <hr />

          <Reversing />

        </Grid>
      </div>
    );
  }
}

export default Documentation;
