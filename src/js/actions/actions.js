import axios from 'axios'
import {pushPath} from 'redux-simple-router'

export const SEARCH = 'SEARCH'

export function search(query) {
  return {
    type: SEARCH,
    query
  }
}

export const REQUEST_SHOWS = 'REQUEST_SHOWS'

export function requestShows(query) {
  return {
    type: REQUEST_SHOWS,
    query
  }
}

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'

function receiveShows(query, json) {
  return {
    type: RECEIVE_SHOWS,
    query,
    shows: json.data.map(show => show.show),
    receivedAt: Date.now()
  }
}

function fetchShows(query) {
  return dispatch => {
  dispatch(requestShows(query))

  return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => {
      return response
    })
    .then(json => {
      dispatch(receiveShows(query, json))})
  }
}

function shouldFetchShows(state, query) {
  const shows = state.showsBySearch[query]
  if (!shows) {
    return true
  } else if (shows.isFetching) {
    return false
  }
}

export function fetchShowsIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchShows(getState(), query)) {
      return dispatch(fetchShows(query))
    }
  }
}

export const SELECTED_SHOW = 'SELECTED_SHOW'

export function selectedShow(id) {
  return {
    type: SELECTED_SHOW,
    id
  }
}

export const REQUEST_SHOW = 'REQUEST_SHOW'

export function requestShow(id) {
  return {
    type: REQUEST_SHOW,
    id
  }
}

export const RECEIVE_SHOW = 'RECEIVE_SHOW'

export function receiveShow(id, json) {
  return {
    type: RECEIVE_SHOW,
    id,
    show: json.data
  }
}

export function fetchShow(id) {
  return dispatch => {
    dispatch(requestShow(id))

    return axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => {
        return response
      }).then(json => {
        dispatch(receiveShow(id, json))
      })
  }
}

export const CHECK_USER = 'CHECK_USER'

export function checkUser(user) {
  return {
    type: CHECK_USER,
    user
  }
}

export const SET_USER = 'SET_USER'

export function setUser(json) {
  return {
    type: SET_USER,
    user: json.data
  }
}

export const LOGIN = 'LOGIN'

export function login(user) {
  return dispatch => {
    dispatch(checkUser(user))

    return axios.post('http://localhost:3000/login', user)
      .then(response => {
        return response
      }).then(json => {
        dispatch(setUser(json))
        dispatch(pushPath('/shows', json.data))
      })
  }
}

export const FOLLOW_SHOW_REQUEST = 'FOLLOW_SHOW_REQUEST';
export const FOLLOW_SHOW_SUCCESS = 'FOLLOW_SHOW_SUCCESS';
export const FOLLOW_SHOW_FAILURE = 'FOLLOW_SHOW_FAILURE';

