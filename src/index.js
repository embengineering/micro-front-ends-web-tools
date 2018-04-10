import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadManifest } from './utilities';
import App from './App';

loadManifest('/micro-front-ends-standard-nav-bar');
loadManifest('/micro-front-ends-tally');
loadManifest('/micro-front-ends-error-pages');

ReactDOM.render(<App />, document.querySelector('#main'));