import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Todos from './reducers/Todos';
import App from './views/App';
import './index.css';

let store = createStore(Todos);
ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>,
  document.getElementById('root')
);
