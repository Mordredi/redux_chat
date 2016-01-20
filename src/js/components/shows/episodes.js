import React, {Component, PropTypes} from 'react';
import Episode from './episode';

export default class Episodes extends Component {
  render() {
    const {episodes, userEpisodes, onWatch, enterChat} = this.props
    return (
      <ul className="flex flex-column">
        {episodes.map((episode) =>
          <Episode {...episode} userEpisodes={userEpisodes} enterChat={enterChat} onWatch={onWatch} key={episode.id} />)}
      </ul>
    )
  }
}

Episodes.propTypes = {
  episodes: PropTypes.array,
  userEpisodes: PropTypes.array,
  onWatch: PropTypes.func,
  enterChat: PropTypes.func
}