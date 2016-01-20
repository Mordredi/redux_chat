import React, {Component, PropTypes} from 'react';
import User from './users/user';
import Search from './shows/search';

export default class Sidebar extends Component {
  render() {
    const {user, onLogoutClick, onSearch} = this.props
    return (
      <div className="flex flex-column sidebar">
        <User user={user} onLogoutClick={onLogoutClick}/>
        <Search onSearch={onSearch}/>
      </div>
    )
  }
}

Sidebar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}