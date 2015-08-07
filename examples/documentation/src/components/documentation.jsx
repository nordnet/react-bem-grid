import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';

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
  render() {
    return (
      <Grid style={{
          boxSizing: 'border-box',
          margin: '0 auto',
        }}>
        <Responsive />

        <Offsets />

        <AutoWidths />

        <NestedGrids />

        <CustomElementType />

        <h2>Alignment</h2>
        <p>Add properties to align elements to the start or end of a row as well as the top, bottom, or center of a column.</p>
        <AlignmentStart />
        <AlignmentCenter />
        <AlignmentEnd />
        <AlignmentAll />
        <AlignmentTop />
        <AlignmentMiddle />
        <AlignmentBottom />

        <h2>Distribution</h2>
        <p>Add properties to distribute the contents of a row or column.</p>
        <DistributionAround />
        <DistributionBetween />

        <h2>Reordering</h2>
        <p>Add properties to reorder columns.</p>
        <ReorderingFirst />
        <ReorderingLast />

        <Reversing />

      </Grid>
    );
  }
}

export default Documentation;
