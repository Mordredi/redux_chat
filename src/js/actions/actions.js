import axios from 'axios'

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