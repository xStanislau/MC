import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Main from './pages/Main';

import store from './redux/store';

import './index.css';

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
