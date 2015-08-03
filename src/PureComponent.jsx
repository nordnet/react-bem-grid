/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

import React from 'react';
import shallowEqual from 'shallowequal';

class PureComponent extends React.Component {
  shallowCompare(instance, nextProps, nextState) {
    return (
      !shallowEqual(instance.props, nextProps) ||
      !shallowEqual(instance.state, nextState)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.shallowCompare(this, nextProps, nextState);
  }
}

export default PureComponent;
