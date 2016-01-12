import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class App extends Component {
  constructor() {

  }
  render() {
    var component;
    if (this.state.loggedIn === true) {
      componenet = <User />
    } else {
      component = <Login />
    }
    return (
      component
    )
  }
}