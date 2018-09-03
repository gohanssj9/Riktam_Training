import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(module.hot) module.hot.accept();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
