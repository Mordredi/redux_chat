import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/store';
import {combineReducers} from 'redux';
import reducers from '../reducers/reducers';
import App from './app';

const store = configureStore()

export default class Configure extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};