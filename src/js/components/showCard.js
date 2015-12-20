import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class ShowCard extends Component {
  render () {
    return (
      <li>
        <img src={this.props.image.medium} alt={this.props.name} />
        <Link to={'/shows/' + this.props.id}>{this.props.name}</Link>
      </li>
    )
  }
}

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}