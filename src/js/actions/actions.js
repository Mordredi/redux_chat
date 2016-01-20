import axios from 'axios'
// import io from 'socket.io-client'

export const REQUEST_SHOWS = 'REQUEST_SHOWS'
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'
export const SEARCH_ERROR = 'SEARCH_ERROR'

function requestShows(query) {
  return {
    type: REQUEST_SHOWS,
    fetchingShows: true,
    query
  }
}

function receiveShows(shows) {
  return {
    type: RECEIVE_SHOWS,
    fetchingShows: false,
    shows
  }
}

function searchError(message) {
  return {
    type: SEARCH_ERROR,
    fetchingShows: false,
    message
  }
}

export function search(query) {
  return dispatch => {
    dispatch(requestShows(query))
    return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => {
        return response
      }).then(json => {
        dispatch(receiveShows(json.data));
        dispatch(setView('shows'));
      })
  }
}

export const REQUEST_SHOW = 'REQUEST_SHOW'
export const RECEIVE_SHOW = 'RECEIVE_SHOW'
export const SHOW_ERROR = 'SHOW_ERROR'

function requestShow(id) {
  return {
    type: REQUEST_SHOW,
    fetchingShow: true,
    id
  }
}

function receiveShow(show) {
  return {
    type: RECEIVE_SHOW,
    fetchingShow: false,
    show
  }
}

export function selectShow(id) {
  return dispatch => {
    dispatch(requestShow(id))

    return axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => {
        return response
      }).then(json => {
        dispatch(receiveShow(json.data));
        dispatch(setView('show'));
      })
  }
}


export const CHANGE_VIEW = 'CHANGE_VIEW'

function changeView(view) {
  return {
    type: CHANGE_VIEW,
    view
  }
}

export function setView(view) {
  return dispatch => {
    dispatch(changeView(view))
  }
}


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  console.log(user);
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}


export function loginUser(creds) {
  return dispatch => {

    dispatch(requestLogin(creds))

    return axios.post('http://localhost:3000/login', creds)
      .then(response => {
        console.log(response)
        return response.data
      }).then(data => {
        localStorage.setItem('id_token', data.token);
        dispatch(receiveLogin(data.user));
        dispatch(setUser(data.user));
      })
  }
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

function requestRegister(creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user
  }
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function registerUser(creds) {
  return dispatch => {

    dispatch(requestRegister(creds))

    return axios.post('http://localhost:3000/register', creds)
      .then(response => {
        return response
      }).then(json => {
        console.log(json)
        localStorage.setItem('id_token', json.data.token);
        dispatch(receiveRegister(json.data.user));
        dispatch(setUser(json.data.user));
      })
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'


function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

export const FOLLOW_SHOW_REQUEST = 'FOLLOW_SHOW_REQUEST';
export const FOLLOW_SHOW_SUCCESS = 'FOLLOW_SHOW_SUCCESS';
export const FOLLOW_SHOW_FAILURE = 'FOLLOW_SHOW_FAILURE';

function followShowRequest(id, user) {
  return {
    type: FOLLOW_SHOW_REQUEST,
    id,
    user
  }
}

function followShowSuccess(user) {
  return {
    type: FOLLOW_SHOW_SUCCESS,
    user
  }
}

export function followShow(id, user) {
  return dispatch => {
    dispatch(followShowRequest(id, user))
    console.log(id, user);
    return axios.post('http://localhost:3000/follow/' + id, user)
      .then(response => {
        return response
      }).then(json => {
        dispatch(followShowSuccess(json.data))
        dispatch(updateUser(json.data))
      })
  }
}

export const WATCH_EPISODE_REQUEST = 'WATCH_EPISODE_REQUEST';
export const WATCH_EPISODE_SUCCESS = 'WATCH_EPISODE_SUCCESS';
export const WATCH_EPISODE_FAILURE = 'WATCH_EPISODE_FAILURE';

function watchEpisodeRequest(id, user) {
  return {
    type: WATCH_EPISODE_REQUEST,
    id,
    user
  }
}

function watchEpisodeSuccess(user) {
  return {
    type: WATCH_EPISODE_SUCCESS,
    user
  }
}

export function watchEpisode(id, user) {
  return dispatch => {
    dispatch(watchEpisodeRequest(id, user))
    return axios.post('http://localhost:3000/watch/' + id, user)
      .then(response => {
        console.log(response)
        return response
      }).then(json => {
        console.log(json)
        dispatch(watchEpisodeSuccess(json.data))
        dispatch(updateUser(json.data))
      })
  }
}

export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'

function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}


export const CHAT_REQUEST = 'CHAT_REQUEST'
export const CHAT_SUCCESS = 'CHAT_SUCCESS'
export const CHAT_FAILURE = 'CHAT_FAILURE'

function chatRequest(id) {
  return {
    type: CHAT_REQUEST,
    id
  }
}

function chatSuccess(chatRoom) {
  return {
    type: CHAT_SUCCESS,
    chatRoom
  }
}

export function enterChatRoom(chatRoom) {
  var chat;
  return dispatch => {
    dispatch(chatRequest(chatRoom.id))
    return axios.post('http://localhost:3000/chat', chatRoom)
      .then(response => {
        return response
      }).then(json => {
        dispatch(setChat(json.data.chatRoom));
        dispatch(setView('chat'));
      })
  }
}

export const SET_CHAT = 'SET_CHAT'
export const UPDATE_CHAT = 'UPDATE_CHAT'

function updateChat(chatRoom) {
  return {
    type: UPDATE_CHAT,
    chatRoom
  }
}

function setChat(chatRoom) {
  return {
    type: SET_CHAT,
    chatRoom
  }
}

export const CREATE_CHAT_REQUEST = 'CREATE_CHAT_REQUEST'
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS'
export const CREATE_CHAT_FAILURE = 'CREATE_CHAT_FAILURE'

function createChatRequest(id) {
  return {
    type: CREATE_CHAT_REQUEST,
    id
  }
}

function createChatSuccess(chatRoom) {
  return {
    type: CREATE_CHAT_SUCCESS,
    chatRoom
  }
}

function createChatRoom(chatRoom) {
  return dispatch => {
    dispatch(createChatRequest(chatRoom.id));
    return axios.post('http://localhost:3000/chat', chatRoom)
      .then(response => {
        return response
      }).then(json => {
        dispatch(setChat(json.data));
        dispatch(setView('chat'));
      })
  }
}

export const MESSAGE_REQUEST = 'MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = 'MESSAGE_FAILURE'

function messageRequest(message, id) {
  return {
    type: MESSAGE_REQUEST,
    message,
    id
  }
}

function messageSuccess(chatRoom) {
  return {
    type: MESSAGE_SUCCESS,
    chatRoom
  }
}

export function sendMessage(message, id) {
  return dispatch => {
    dispatch(messageRequest(message))
    return axios.post('http://localhost:3000/chat/' + id, message)
      .then(response => {
        return response
      }).then(json => {
        console.log(json);
        dispatch(messageSuccess(json.data));
        dispatch(updateChat(json.data));
      })
  }
}

// export function connectToSocket() {

// }