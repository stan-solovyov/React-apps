import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    const {filter} = this.props;

    const buttonElements = this.buttons.map( ({label, name})=> {
      const isActive = filter === name;
      const cssClass = isActive ? 'btn-info': 'btn-outline-secondary';
      return (<button type="button" key={name}
          className={`btn ${cssClass}`} onClick={() => this.props.onFilterChange(name)}>{label}
      </button>)
    });

    return (
      <div className="btn-group">
        { buttonElements }
      </div>
    );
  }
}