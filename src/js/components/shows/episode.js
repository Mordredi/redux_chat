import React, {Component, PropTypes} from 'react';

export default class Episode extends Component {
  handleClick(e) {
    const {onWatch, id} = this.props
    e.preventDefault();
    onWatch(id)
  }

  handleChat(e) {
    const {enterChat, id, name} = this.props
    e.preventDefault();
    var chatRoom = {
      id: id,
      name: name
    }
    enterChat(chatRoom);
  }

  render() {
    const {name, id} = this.props
    const {userEpisodes} = this.props
    for (var i = 0; i <= userEpisodes.length; i++) {
      if (userEpisodes[i] == id) {
        var watched = <a className="btn btn-chat" onClick={e => this.handleChat(e)}>Enter Chat Room</a>
        console.log(watched);
        break
      } else {
        var watched = <a className="btn btn-watch" onClick={e => this.handleClick(e)}>Watched Episode</a>
      }
    }
    return (
      <li className="episode">
        <p>{name}: {watched}</p>
      </li>
    )
  }
}

Episode.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  userEpisodes: PropTypes.array,
  onWatch: PropTypes.func,
  enterChat: PropTypes.func
}