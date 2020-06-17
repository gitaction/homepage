import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helper';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { configureFakeBackend } from './_helper';

// setup fake backend
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
