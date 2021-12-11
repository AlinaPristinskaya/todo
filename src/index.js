import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'

console.log(store.getState())



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

