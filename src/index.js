import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App.js';
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)

// If using React version lower than 18:
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
