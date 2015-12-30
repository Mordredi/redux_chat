import {combineReducers} from 'redux';
import {
  SEARCH, REQUEST_SHOWS, RECEIVE_SHOWS, RECEIVE_SHOW, REQUEST_SHOW, SELECT_SHOW
} from '../actions/actions'

import {routeReducer} from 'redux-simple-router'

function search(state='', action) {
  switch (action.type) {
    case SEARCH:
      return action.query
    default:
      return state
  }
}

function shows(state= {
  isFetching: false,
  shows: []
}, action) {
  switch (action.type) {
    case REQUEST_SHOWS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SHOWS:
      return Object.assign({}, state, {
        isFetching: false,
        shows: action.shows,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function selectedShow(state = {}, action) {
  switch (action.type) {
    case SELECTED_SHOW:
      return action.show
    default:
      return state
  }
}

function show(state={
  isFetching: false,
  show: {}
}, action) {
  switch (action.type) {
    case REQUEST_SHOW:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_SHOW:
      return Object.assign({}, state, {
        isFetching: false,
        show: action.show
      })
    default:
      return state
  }
}

function showById(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SHOW:
    case REQUEST_SHOW:
      return Object.assign({}, state, {
        [action.id]: show(state[action.id], action)
      })
    default:
      return state
  }
}

function showsBySearch(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SHOWS:
    case REQUEST_SHOWS:
      return Object.assign({}, state, {
        [action.query]: shows(state[action.query], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  showsBySearch,
  search,
  showById,
  routing: routeReducer
})

export default rootReducer