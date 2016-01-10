import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';


export default class ShowCard extends Component {
  handleClick(e) {
    e.preventDefault();
    const id = this.props.id
    this.props.onSelect(id)
  }
  handleFollow(e) {
    e.preventDefault();
    const id = this.props.id
    this.props.onFollow(id)
  }
  render () {
    console.log(this.props)
    return (
      <li>
        <div className="show-card">
          <div className="show-card-front">
            <img src={this.props.image.medium} alt={this.props.name} />
          </div>
          <div class="show-card-back">
            <a onClick={e => this.handleFollow(e)}>Follow Show</a>
            <a onClick={e => this.handleClick(e)}>{this.props.name}</a>
            {this.props.status}
            <div dangerouslySetInnerHTML={{__html: this.props.summary}}></div>

          </div>
        </div>
      </li>
    )
  }
}

ShowCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFollow: PropTypes.func.isRequired
}