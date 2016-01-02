import React, {Component, PropTypes} from 'react';

export default class RegisterToggle extends Component {
  handleClick(e) {
    this.props.onToggle('register')
  }
  render() {
    return (
      <li><a onClick={e => this.handleClick(e) }>Register</a></li>
    )
  }
}

RegisterToggle.propTypes = {
  onToggle: PropTypes.func.isRequired
}