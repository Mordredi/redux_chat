import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Template extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TV CHAT</h1>
          <nav>
            <ul>
              <li><Link to="/shows">Shows</Link></li>
            </ul>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </div>
    )
  }
}