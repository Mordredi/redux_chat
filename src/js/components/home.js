import React, {Component} from 'react';
import Login from './users/login';
import Register from './users/register';
import ToggleForm from './toggleForm';
import axios from 'axios';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this)
    this.login = this.login.bind(this)
    this.register = this.register.bind(this)
    this.state = {
      form: 'login'
    }
  }
  toggleForm(form) {
    this.setState({
      form: form
    })
  }
  login(user) {
    axios.post('http://localhost:3000/login', user).then(function(res){
      console.log(res);
    })
  }
  register(user) {
    axios.post('http://localhost:3000/register', user).then(function(res){
      console.log(res);
    })
  }
  render () {
    return (
      <div>
        <h1>Welcome to TV Chat</h1>
        <ToggleForm onToggle = {this.toggleForm}/>
        { this.state.form === 'login' ? <Login onLogin={this.login}/> : <Register onRegister={this.register} /> }
      </div>

    )
  }
}