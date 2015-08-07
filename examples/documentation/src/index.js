import './assets/normalize.min.css';
import './assets/monokai.min.css';
import '../../../dist/Grid.css';

import React from 'react';
import Documentation from './components/documentation';

var app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

React.render(<Documentation />, document.getElementById('app'));
