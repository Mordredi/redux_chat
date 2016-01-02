import React, {Component, PropTypes} from 'react';
import LoginToggle from './loginToggle';
import RegisterToggle from './registerToggle';

export default class ToggleForm extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        <LoginToggle onToggle={this.props.onToggle} />
        <RegisterToggle onToggle={this.props.onToggle} />
      </ul>
    )
  }
}

ToggleForm.propTypes = {
  onToggle: PropTypes.func.isRequired
}