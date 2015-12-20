import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {search, fetchShowsIfNeeded} from '../actions/actions'
import Search from './search';
import SearchResults from './searchResults';

export default class Shows extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const { dispatch, search } = this.props
    dispatch(fetchShowsIfNeeded(search))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.search !== this.props.search) {
      const {dispatch, search} = nextProps
      dispatch(fetchShowsIfNeeded(search))
    }
  }
  handleClick(query) {
    this.props.dispatch(search(query))
  }
  render() {
    const {search, shows, isFetching} = this.props
    return (
      <div>
        <Search
          onSearch = { this.handleClick
        } />
        <SearchResults
          shows= {shows}
        />
      </div>
    )
  }
}

Shows.propTypes = {
  search: PropTypes.string.isRequired,
  shows: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {search, showsBySearch} = state
  const {
    isFetching,
    shows: shows
  } = showsBySearch[search] || {
    isFetching: true,
    shows: []
  }
  return {
    search,
    shows,
    isFetching
  }
}

export default connect(mapStateToProps)(Shows)