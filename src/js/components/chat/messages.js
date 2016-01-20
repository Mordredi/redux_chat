import React, {Component, PropTypes} from 'react'
import Message from './message'

export default class Messages extends Component {
  render() {
    const { messages } = this.props
    console.log(messages);
    return (
      <ul className="flex flex-column messages">
        {messages.map((message) =>
          <Message key={message._id} {...message} /> )}
      </ul>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array
}