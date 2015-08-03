# React BEM Grid

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

### NPM

```sh
npm install --save react-bem-grid
```

## Usage

```js
import React from 'react';
import { Row, Col, Grid } from 'react-bem-grid';

class GridExample extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} sm={4} lg xsOffset={3} smOffset={4} xsLast smLast>
            <div>Items</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
```

## Example projects

First, clone react-bem-grid, install depenencies and build the project:

```
git clone https://github.com/nordnet/react-bem-grid.git
npm install
npm run build
```

Then run the simple-grid example project:

```
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
