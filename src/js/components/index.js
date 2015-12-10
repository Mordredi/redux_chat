import React, {Component} from 'react';
import request from 'superagent';
import {Link} from 'react-router';

export default class Shows extends Component {
  constructor(){
    super();
    this.state = { shows: []}
    this.handler = this.handler.bind(this);
  }
  handler(e){
    var self = this;
    e.preventDefault();
    let node = this.refs.search;
    let search = node.value;
    request.get(' http://api.tvmaze.com/search/shows')
    .query({q: search})
    .end(function(err, res){
      if (err) console.error(err);
      self.setState({shows: res.body});
    })
  }
  render() {
    console.log(this.state.shows)
    let shows = this.state.shows.map(function(show){
      return (
        <li key={show.show.id}>
          <img src={show.show.image.medium} alt={show.show.name} />
          <Link to={'/shows/' + show.show.id}>{show.show.name}</Link>
        </li>
      )
    })
    return (
      <div>
        <input ref="search" type="search" />
        <button onClick={this.handler}>Search</button>
        <ul>
          {shows}
        </ul>
      </div>
    )
  }
}
