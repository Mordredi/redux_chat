import React, {Component, PropTypes} from 'react';
import Episodes from './episodes';

export default class Show extends Component {
  handleClick(e) {
    e.preventDefault;
    this.props.searchResults('shows');
  }
  render() {
    const { name, image, _embedded } = this.props.show
    const {user, onWatch, enterChat} = this.props
    return (
      <div className="flex flex-column show view">
        <h1>{name}</h1>
        <img src={image.medium} />
        <Episodes onWatch={onWatch} enterChat={enterChat} episodes={_embedded.episodes} userEpisodes={user.episodes} />
        <a className="btn" onClick={e => this.handleClick(e)}>Return to search results</a>
      </div>
    )
  }
}

Show.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  _embedded: PropTypes.object,
  seachResults: PropTypes.func,
  user: PropTypes.object,
  onWatch: PropTypes.func,
  enterChat: PropTypes.func
}
