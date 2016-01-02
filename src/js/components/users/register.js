import React, {Component, PropTypes} from 'react';

export default class Register extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var usernameNode = this.refs.username;
    var username = usernameNode.value.trim();
    var emailNode = this.refs.email;
    var email = emailNode.value.trim();
    var passwordNode = this.refs.password;
    var password = passwordNode.value.trim();
    var passwordConfirmationNode = this.refs.password_confirmation;
    var passwordConfirmation = passwordConfirmationNode.value.trim();
    var user = {
      username: username,
      email: email,
      password: password
    }
    this.props.onRegister(user);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} >
        <div>
          <label>Username: </label>
          <input type="text" ref="username"/>
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref="email"/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password"/>
        </div>
        <div>
          <label>Password Confirmation: </label>
          <input type="password" ref="password_confirmation"/>
        </div>
        <button type="submit">Register</button>
      </form>
    )
  }
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired
}