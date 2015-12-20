import React, {Component} from 'react';
import request from 'superagent';


export default class Show extends Component {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {show: {}}
    request.get('http://api.tvmaze.com/shows/' + this.props.params.id + '?embed=episodes')
    .end(function(err, res){
      self.setState({show: res.body});
    });
  }
  render() {

    var show = this.state.show;
    console.log(show);
    if (this.state.show._embedded !== undefined) {
    var episodes = this.state.show._embedded.episodes.map(function(episode){
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