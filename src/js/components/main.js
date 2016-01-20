import React, {Component, PropTypes} from 'react';
import {logoutUser, search, selectShow, setView, followShow, watchEpisode, enterChatRoom, sendMessage, getChat} from '../actions/actions'
import Sidebar from './sidebar';
import Shows from './shows/shows';
import Show from './shows/show';
import ChatRoom from './chat/chatRoom';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.onFollow = this.onFollow.bind(this)
    this.onWatch = this.onWatch.bind(this)
    this.enterChat = this.enterChat.bind(this)
    this.onMessage = this.onMessage.bind(this)
  }

  componenetDidMount() {
    socket.on('message sent', function(data){
      this.props.dispatch(getChat(this.props.chatRoom._id))
    })
  }

  onFollow(id) {
    const { dispatch, user } = this.props;
    dispatch(followShow(id, user));
  }

  onWatch(id) {
    const { dispatch, user } = this.props;
    dispatch(watchEpisode(id, user));
  }

  enterChat(chatRoom) {
    const {dispatch} = this.props;
    dispatch(enterChatRoom(chatRoom));
  }

  onMessage(message, id) {
    const {dispatch} = this.props
    dispatch(sendMessage(message, id));
  }

  render() {
    const { dispatch, user, shows, show, view, chatRoom } = this.props
    if (view === 'shows') {
      var currentView = <Shows user={user} shows={shows} onSelect={id => dispatch(selectShow(id))} onFollow={this.onFollow}/>
    } else if (view === 'show') {
      var currentView = <Show searchResults={view=>dispatch(setView(view))} onWatch={this.onWatch} enterChat={this.enterChat} user={user} show={show}/>
    } else if (view === 'chat') {
      var currentView = <ChatRoom name={show.name} backShow={view=>dispatch(setView(view))} chatRoom={chatRoom} onMessage={this.onMessage} user={user} />
    }
    return (
      <div className="flex main">
        <Sidebar user={user} onLogoutClick={()=>dispatch(logoutUser())} onSearch={query => dispatch(search(query))} />
        {currentView}
      </div>
    )
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  shows: PropTypes.array,
  show: PropTypes.object,
  view: PropTypes.string,
  chatRoom: PropTypes.object
}