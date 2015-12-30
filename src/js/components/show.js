import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetchShow} from '../actions/actions'


export default class Show extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchShow(this.props.params.id))
  }

  render() {
    const { show, isFetching } = this.props

    if (show._embedded !== undefined) {
      var episodes = show._embedded.episodes.map(function(episode){
        return (
          <li key={episode.id}>{episode.name}: Season {episode.season} episode {episode.number}</li>
        )
      });
    } else {
      var episodes = [];
    }

    if (show.image !== undefined) {
      var image = show.image;
    } else {
      var image = {};
    }
    return (
      <div>
        <h1>{show.name}</h1>
        <img src={image.medium} />
        <ul>{episodes}</ul>
      </div>
    )
  }
}

Show.propTypes = {
  show: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { showById, routing } = state
  console.log(routing)
  const {
    isFetching,
    show: show
  } = showById[routing.state] || {
    isFetching: true,
    show: {}
  }
  return {
    show,
    isFetching
  }
}

export default connect(mapStateToProps)(Show)