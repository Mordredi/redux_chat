import React, {Component, PropTypes} from 'react'

export default class Message extends Component {
  render() {
    console.log(this.props)
    const {username, message} = this.props
    return (
      <li className="message">{username}: {message}</li>
    )
  }
}

Message.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string
}