import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import $ from 'app_modules/libs/jquery-3.2.1.slim.min.js';
window.$ = $;
window.jQuery = $;

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
