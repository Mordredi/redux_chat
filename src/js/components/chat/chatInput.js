import React, {Component, PropTypes} from 'react'

export default class ChatInput extends Component {
  handleClick(e) {
    const {user, onMessage, chatRoom} = this.props
    e.preventDefault();
    const id = chatRoom._id
    const node = this.refs.message
    const message = {
      message: node.value.trim(),
      username: user.username
    }
    onMessage(message, id);
    node.value = ''
  }
  render() {
    return (
      <div className="chat-input">
        <input type="text" ref="message" />
        <button className="btn btn-message" onClick={e => this.handleClick(e)}>Send Message</button>
      </div>
    )
  }
}

ChatInput.propTypes = {
  user: PropTypes.object,
  chatRoom: PropTypes.object,
  onMessage: PropTypes.func
}