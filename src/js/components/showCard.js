import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


export default class ShowCard extends Component {
  handleClick(e) {
    const id = this.props.id
    this.props.onSelect(id)
  }
  render () {
    return (
      <li>
        <img src={this.props.image.medium} alt={this.props.name} />
        <a  onClick={e => this.handleClick(e)}>{this.props.name}</a>
      </li>
    )
  }
}

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}