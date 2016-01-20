import React, {Component, PropTypes} from 'react';
import ShowCard from './showCard'

export default class Shows extends Component {
  render() {
    const {shows, onSelect, onFollow, user} = this.props;
    console.log(user);
    return (
      <div className="shows view">
        <ul className="flex">
          {shows.map((show) =>
            <ShowCard {...show.show}
              key={show.show.id} onSelect={onSelect} onFollow={onFollow} userShows={user.shows}
            />
          )}
        </ul>
      </div>
    )
  }
}

Shows.propTypes = {
  shows: PropTypes.array,
  onSelect: PropTypes.func,
  onFollow: PropTypes.func,
  user: PropTypes.object
}