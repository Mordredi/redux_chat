import React, {Component, PropTypes} from 'react';
import ShowCard from './showCard';

export default class SearchResults extends Component {
  render() {
    return (
      <ul>
        {this.props.shows.map((show) =>
          <ShowCard {...show}
            key={show.id} onSelect={this.props.onSelect}
          />
        )}
      </ul>
    )
  }
}

SearchResults.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
}