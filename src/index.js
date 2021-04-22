import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WebPlayerComponent from './App';
import rootReducers from './reducers';
const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <WebPlayerComponent />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();