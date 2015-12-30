import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/store';
import {combineReducers} from 'redux';
import Index from './index';
import Show from './show';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from '../reducers/reducers';

const store = configureStore()
const history = createBrowserHistory()

syncReduxAndRouter(history, store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Index} />
          <Route path='/shows/:id' component={Show} />
        </Router>
      </Provider>
    )
  }
}
