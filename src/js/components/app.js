import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
// import {connectToSocket} from '../actions/actions'
import Home from './home';
import Main from './main';

export default class App extends Component {
  // componentDidMount() {
  //   const {dispatch} = this.props
  //   dispatch(connectToSocket());
  // }
  render() {
    const { dispatch, isAuthenticated, errorMessage, user, shows, show, view, chatRoom } = this.props
    return (
      <div>
        {isAuthenticated === true ?
          <Main
            dispatch={dispatch}
            user={user}
            shows={shows}
            show={show}
            view={view}
            chatRoom={chatRoom}
          /> :
          <Home
            dispatch={dispatch}
            errorMessage={errorMessage}
          /> }
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  user: PropTypes.object,
  shows: PropTypes.array,
  show: PropTypes.object,
  view: PropTypes.string,
  chatRoom: PropTypes.object
}

function  mapStateToProps(state) {
  const { auth, showsBySearch, selectedShow, currentView, currentUser, currentChatRoom } = state
  const { isAuthenticated, errorMessage } = auth
  const { user } = currentUser
  const { shows } = showsBySearch
  const { show } = selectedShow
  const { view } = currentView
  const { chatRoom } = currentChatRoom

  return {
    isAuthenticated,
    errorMessage,
    user,
    shows,
    show,
    view,
    chatRoom
  }
}

export default connect(mapStateToProps)(App)