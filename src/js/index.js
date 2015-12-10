import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template';
import Shows from './components/index'
import Show from './components/show'
import {Router, Route, IndexRoute} from 'react-router'

ReactDOM.render(
  <Router>
    <Route path="/" component={Template}>
      <IndexRoute component={Shows} />
      <Route path="shows/:id" component={Show} />
    </Route>
  </Router>
  , document.getElementById('app')
);