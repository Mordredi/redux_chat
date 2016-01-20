import {combineReducers} from 'redux';
import {
  REQUEST_SHOWS, RECEIVE_SHOWS, SEARCH_ERROR, SHOW_ERROR, RECEIVE_SHOW, REQUEST_SHOW, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS, CHANGE_VIEW, UPDATE_USER, SET_USER, SET_CHAT, UPDATE_CHAT
} from '../actions/actions'

function currentView(state={
  view: 'shows'
}, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view
      })
    default:
      return state
  }
}

function showsBySearch(state= {
  fetchingShows: false,
  shows: []
}, action) {
  switch (action.type) {
    case REQUEST_SHOWS:
      return Object.assign({}, state, {
        fetchingShows: true,
        query: action.query
      })
    case RECEIVE_SHOWS:
      return Object.assign({}, state, {
        fetchingShows: false,
        shows: action.shows,
      })
    default:
      return state
  }
}

function selectedShow(state= {
  fetchingShow: false,
  show: {}
}, action) {
  switch (action.type) {
    case REQUEST_SHOW:
      return Object.assign({}, state, {
        fetchingShow: true,
        id: action.id
      })
    case RECEIVE_SHOW:
      return Object.assign({}, state, {
        fetchingShow: false,
        show: action.show
      })
    default:
      return state
  }
}

function currentUser(state = {
  user: {}}, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    case UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state
  }
}

function currentChatRoom(state = {
  chatRoom: {}}, action) {
  switch (action.type) {
    case SET_CHAT:
      return Object.assign({}, state, {
        chatRoom: action.chatRoom
      })
    case UPDATE_CHAT:
      return Object.assign({}, state, {
        chatRoom: action.chatRoom
      })
    default:
      return state
  }
}

function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  user: {}}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      })
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    default:
      return state
    }
}

const rootReducer = combineReducers({
  showsBySearch,
  auth,
  selectedShow,
  currentView,
  currentUser,
  currentChatRoom
})

export default rootReducer