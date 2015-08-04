# React BEM Grid

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

A BEM-ified port of [Flexbox Grid](http://flexboxgrid.com) to a simple, reusable React component.

### NPM

```sh
npm install --save react-bem-grid
```

## Usage

```js
import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';

class GridExample extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            ...
          </Col>
          <Col xs={12} sm={6} lg={4}>
            ...
          </Col>
          <Col xs={12} sm={6} lg={4}>
            ...
          </Col>
        </Row>
      </Grid>
    );
  }
}
```

## Documentation
- [Responsive](#responsive)
- [Offsets](#offsets)
- [Auto Width](#auto-width)
- [Nested Grids](#nested-grids)
- [Custom Element Type](#custom-element-type)
- [Alignment](#alignment)
  - [Start](#start)
  - [Center](#center)
  - [End](#end)
  - [Top](#top)
  - [Middle](#middle)
  - [Bottom](#bottom)
- [Distribution](#distribution)
  - [Around](#around)
  - [Between](#between)
- [Reordering](#reordering)
  - [First](#first)
  - [Last](#last)
- [Reversing](#reversing)

### Responsive
Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.
```js
<Grid>
  <Row>
    <Col xs={12} sm={8} md={6} lg={4}>
      ...
    </Col>
  </Row>
</Grid>
```

### Offsets
Offset a column.
```js
<Grid>
  <Row>
    <Col xs={8} xsOffset={4} sm={6} smOffset={6} lg={12}>
      ...
    </Col>
  </Row>
</Grid>
```

### Auto Width
Add any number of auto sizing columns to a row. Let the grid figure it out.
```js
<Grid>
  <Row>
    <Col xs>
      ...
    </Col>
    <Col xs>
      ...
    </Col>
    <Col xs>
      ...
    </Col>
  </Row>
</Grid>
```

### Nested Grids
Nest grids inside grids inside grids.
```js
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
```

### Custom Element Type
Add the componentClass property to override the default element type of a Grid, Row or Col.
```js
<Grid>
  <Row componentClass='nav'>
    <Col xs={6}>
      ...
    </Col>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

### Alignment
Add properties to align elements to the start or end of a row as well as the top, bottom, or center of a column.

#### Start
```js
<Grid>
  <Row xsStart>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

#### Center
```js
<Grid>
  <Row xsCenter>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

#### End
```js
<Grid>
  <Row xsEnd>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

**Here is an example of using the modifiers in conjunction to achieve different alignment at different viewport sizes.**
```js
<Grid>
  <Row xsCenter smEnd lgStart>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

#### Top
```js
<Grid>
  <Row xsTop>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

#### Middle
```js
<Grid>
  <Row xsMiddle>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

#### Bottom
```js
<Grid>
  <Row xsBottom>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>
```

### Distribution
Add properties to distribute the contents of a row or column.

#### Around
```js
<Grid>
  <Row xsAround>
    <Col xs={2}>
      ...
    </Col>
    <Col xs={2}>
      ...
    </Col>
    <Col xs={2}>
      ...
    </Col>
  </Row>
</Grid>
```

#### Between
```js
<Grid>
  <Row xsBetween>
    <Col xs={2}>
      ...
    </Col>
    <Col xs={2}>
      ...
    </Col>
    <Col xs={2}>
      ...
    </Col>
  </Row>
</Grid>
```

### Reordering
Add properties to reorder columns.

#### First
```js
<Grid>
  <Row>
    <Col xs={4}>
      1
    </Col>
    <Col xs={4}>
      2
    </Col>
    <Col xs={4} xsFirst>
      3
    </Col>
  </Row>
</Grid>
```

#### Last
```js
<Grid>
  <Row>
    <Col xs={4} xsLast>
      1
    </Col>
    <Col xs={4}>
      2
    </Col>
    <Col xs={4}>
      3
    </Col>
  </Row>
</Grid>
```

### Reversing
```js
<Grid>
  <Row reverse>
    <Col xs={4}>
      1
    </Col>
    <Col xs={4}>
      2
    </Col>
    <Col xs={4}>
      3
    </Col>
  </Row>
</Grid>
```

## Example project

First, clone react-bem-grid, install dependencies and build the project:

```sh
git clone https://github.com/nordnet/react-bem-grid.git
npm install
npm run build
```

Then run the simple-grid example project:

```sh
cd examples/simple-grid
npm install
npm start
```

## License

MIT © [Nordnet Bank AB](https://www.nordnet.se/)

[npm-url]: https://npmjs.org/package/react-bem-grid
[npm-image]: https://img.shields.io/npm/v/react-bem-grid.svg?style=flat-square

[travis-url]: https://travis-ci.org/nordnet/react-bem-grid
[travis-image]: https://img.shields.io/travis/nordnet/react-bem-grid.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/nordnet/react-bem-grid
[coveralls-image]: https://img.shields.io/coveralls/nordnet/react-bem-grid.svg?style=flat-square

[depstat-url]: https://david-dm.org/nordnet/react-bem-grid
[depstat-image]: https://david-dm.org/nordnet/react-bem-grid.svg?style=flat-square
