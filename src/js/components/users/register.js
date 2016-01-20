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
    var creds = {
      username: username,
      email: email,
      password: password
    }
    this.props.onRegisterClick(creds);
  }
  render() {
    return (
      <form className="flex flex-column" onSubmit={e => this.handleSubmit(e)} >
          <label>Username</label>
          <input type="text" ref="username"/>
          <label>Email</label>
          <input type="email" ref="email"/>
          <label>Password</label>
          <input type="password" ref="password"/>
          <label>Password Confirmation</label>
          <input type="password" ref="password_confirmation"/>
        <button className="btn btn-register" type="submit">Register</button>
      </form>
    )
  }
}

Register.propTypes = {
  onRegisterClick: PropTypes.func.isRequired
}