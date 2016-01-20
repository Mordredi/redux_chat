import React, {Component, PropTypes} from 'react'
import Messages from './messages'
import ChatInput from'./chatInput'

export default class ChatRoom extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.backShow('show');
  }
  render() {
    const { chatRoom, onMessage, user, name } = this.props
    return (
      <div className="flex flex-column view chat-room">
        <h1>{chatRoom.name}</h1>
        <div className="chat-window">
          <Messages messages={chatRoom.messages} />
        </div>
        <div>
          <ChatInput chatRoom={chatRoom} user={user} onMessage={onMessage}/>
        </div>
        <a className="btn" onClick={e => this.handleClick(e)}>Return to {name}</a>
      </div>

    )
  }
}

ChatRoom.propTypes = {
  user: PropTypes.object,
  onMessage: PropTypes.func,
  chatRoom: PropTypes.object,
  backShow: PropTypes.func,
  name: PropTypes.string
}