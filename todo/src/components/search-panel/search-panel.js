import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  
  onValueChange= (event)=> {
    this.setState({term: event.target.value});
    this.props.onTermChange(event.target.value);
  }

  state = {
    term: ''
  }

  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search" onChange={this.onValueChange} value={this.state.term} />
    );
  };
}