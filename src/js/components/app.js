import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/store';
import {combineReducers} from 'redux';
import Shows from './shows/index';
import Show from './shows/show';
import Home from './home';
import Template from './template';
import {Router, Route, IndexRoute} from 'react-router';
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
          <Route path='/' component={Template} >
            <IndexRoute component={Home} />
            <Route path='shows' component={Shows} />
            <Route path='shows/:id' component={Show} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
