import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

// import $ from '../public/libs/jquery-3.2.1.slim.min.js';

// window.$ = $;
// window.jQuery = $;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
