import React, {Component, PropTypes} from 'react';

export default class Search extends Component {
  handleClick(e) {
    const node = this.refs.search
    const query = node.value.trim()
    this.props.onSearch(query)
    node.value = ''
  }
  render() {
    return (
      <div className="search">
        <input ref="search" type="search" />
        <button className="btn btn-search" onClick={e => this.handleClick(e)}>Search</button>
      </div>
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}