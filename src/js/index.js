import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template';
import {Router, Route, IndexRoute} from 'react-router'
import Configure from './components/provider';



ReactDOM.render(
  <Configure />
  , document.getElementById('app')
);