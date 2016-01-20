import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Login from './users/login';
import Register from './users/register';
import ToggleForm from './toggleForm';
import {loginUser, registerUser} from '../actions/actions'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this)
    this.state = {
      form: 'login'
    }
  }
  toggleForm(form) {
    this.setState({
      form: form
    })
  }
  render () {
    const { dispatch, errorMessage } = this.props
    return (
      <div className="flex flex-column home">
        <h1>Welcome to TV Chat</h1>
        <ToggleForm onToggle = {this.toggleForm}/>
        { this.state.form === 'login' ?
          <Login
            errorMessage={errorMessage}
            onLoginClick={creds => dispatch(loginUser(creds))}
          /> : <Register
            onRegisterClick={creds => dispatch(registerUser(creds))} /> }
      </div>

    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}