import React, {Component, PropTypes} from 'react';

export default class ShowCard extends Component {
  handleSelect(e) {
    const {id, onSelect} = this.props
    e.preventDefault();
    onSelect(id)
  }
  handleFollow(e) {
    e.preventDefault();
    const {id, onFollow} = this.props
    onFollow(id)
  }

  render() {
    const {id, name, image, status, summary, userShows} = this.props
    for (var i = 0; i <= userShows.length; i++) {
      if (userShows[i] == id) {
        var follow = <p className="following">Following</p>
        break
      } else {
        var follow = <a className="btn btn-follow" onClick={e => this.handleFollow(e)}>Follow Show</a>
      }
    }
    return (
      <li>
        <div id="f1_container">
          <div id="f1_card" className="shadow">
            <div className="front face">
              <img src={image.medium} alt={name} />
            </div>
            <div className="back face center flex flex-column">
              <h2>{name}</h2>
              { status === "Running" ? <p className="status green">{status}</p> : <p className="status red">{status}</p>}
              <div dangerouslySetInnerHTML={{__html: summary}}></div>
              <a className="btn btn-show" onClick={e => this.handleSelect(e)}>View Show</a>
              {follow}
            </div>
          </div>
        </div>
      </li>
    )
  }
}

ShowCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.object,
  status: PropTypes.string,
  summary: PropTypes.string,
  onSelect: PropTypes.func,
  onFollow: PropTypes.func,
  userShows: PropTypes.array
}