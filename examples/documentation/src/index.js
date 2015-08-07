import './assets/normalize.min.css';
import './assets/monokai.min.css';
import './assets/roboto.css';
import '../../../dist/Grid.css';

import React from 'react';
import Documentation from './components/documentation';

const documentation = document.createElement('div');
documentation.id = 'documentation';
document.body.appendChild(documentation);

React.render(<Documentation />, document.getElementById('documentation'));
