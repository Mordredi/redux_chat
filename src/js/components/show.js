import React, {Component} from 'react';
import request from 'superagent';


export default class Show extends Component {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {show: {}, episodes: []}
    request.get('http://api.tvmaze.com/shows/' + this.props.params.id)
    .end(function(err, res){
      if (err) console.error(err);
      self.setState({show: res.body});
    });

    request.get('http://api.tvmaze.com/shows/' + this.props.params.id + '/episodes')
    .end(function(err, res){;
      if (err) console.error(err);
      self.setState({episodes: res.body})
    });
  }
  render() {

    var show = this.state.show;
    console.log(this.state.episodes);
    var episodes = this.state.episodes.map(function(episode){
      return (
        <li key={episode.id}>{episode.name}: Season {episode.season} episode {episode.number}</li>
      )
    });
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