import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/store'
import Index from './index'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
