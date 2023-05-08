import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/rootReducer';
import CheckoutForm from './components/CheckoutForm';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <CheckoutForm />
  </Provider>,
  document.getElementById('root')
);
