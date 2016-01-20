import React, {Component, PropTypes} from 'react';
import Logout from './logout';

export default class User extends Component {
  render() {
    const {user, onLogoutClick} = this.props
    return (
      <div className="user">
        <h1>{user.username}</h1>
        <Logout onLogoutClick={onLogoutClick}/>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}