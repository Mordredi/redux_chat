import React, {Component, PropTypes} from 'react';

export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var usernameNode = this.refs.username;
    var username = usernameNode.value.trim();
    var passwordNode = this.refs.password;
    var password = passwordNode.value.trim();
    var user = {
      username: username,
      password: password
    }
    this.props.onLogin(user);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>Username: </label>
          <input type="text" ref="username"/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}