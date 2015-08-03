# React BEM Grid

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

This open source project released by Nordnet is licenced under the MIT licence.