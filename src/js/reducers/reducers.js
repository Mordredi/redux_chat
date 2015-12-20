import {combineReducers} from 'redux';
import {
  SEARCH, REQUEST_SHOWS, RECEIVE_SHOWS
} from '../actions/actions'

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
  search
})

export default rootReducer