/* jshint esversion: 6 */

// loading React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';  // loading external css file

import App from './App';  // frontend react app is going to be created in the App.js file

import * as serviceWorker from './serviceWorker';

// logrocket
//import LogRocket from 'logrocket';
//LogRocket.init('fggygy/mern');
//setupLogRocketReact(LogRocket);

ReactDOM.render(<App />, document.getElementById('root'));  // render the app and load it to the root element

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
