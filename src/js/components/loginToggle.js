import React, {Component, PropTypes} from 'react';

export default class LoginToggle extends Component {
  handleClick(e) {
    this.props.onToggle('login')
  }
  render() {
    return (
      <li><a onClick={e => this.handleClick(e) }>Login</a></li>
    )
  }
}

LoginToggle.propTypes = {
  onToggle: PropTypes.func.isRequired
}