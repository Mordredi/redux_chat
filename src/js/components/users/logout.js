import React, {Component, PropTypes} from 'react';

export default class Logout extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.onLogoutClick();
  }
  render() {
    return (
      <button className="btn btn-logout" onClick={e => this.handleLogout(e)}>Logout</button>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}