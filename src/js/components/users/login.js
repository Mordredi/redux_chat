import React, {Component, PropTypes} from 'react';

export default class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var usernameNode = this.refs.username;
    var username = usernameNode.value.trim();
    var passwordNode = this.refs.password;
    var password = passwordNode.value.trim();
    var creds = {
      username: username,
      password: password
    }
    this.props.onLoginClick(creds);
  }
  render() {
    return (
      <form className="flex flex-column" onSubmit={e => this.handleSubmit(e)}>
        <label>Username</label>
        <input type="text" ref="username"/>
        <label>Password</label>
        <input type="password" ref="password"/>
        <button className="btn btn-login" type="submit">Login</button>
      </form>
    )
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
}