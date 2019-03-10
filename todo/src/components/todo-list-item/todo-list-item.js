import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  // constructor() {
  //   super();
  //   this.onLabelClick = () => console.log(`done: ${this.props.label}`);
  // }
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({done}) => { 
      return { done: !done }
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => { 
      return { important: !important }
    });
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';

    if (important) {
      classNames += ' important';
    }

    if (done) {
      classNames += ' done';
    }

    return (
      <span className={classNames}>
        <span onClick={this.onLabelClick}
          className="todo-list-item-label">
          {label}
        </span>

        <button type="button" onClick={ this.onMarkImportant }
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" onClick={ onDeleted }
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}