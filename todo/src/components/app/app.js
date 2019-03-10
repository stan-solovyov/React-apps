import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', id: 1 },
      { label: 'Make Awesome App', id: 2 },
      { label: 'Have a lunch', id: 3 }
    ]
  };

  deleteItem = (id)=> {
    this.setState(({todoData})=> {
      const idx = todoData.findIndex(x => x.id === id);
      const before = todoData.slice(0,idx);
      const after = todoData.slice(idx+1);
      const data = [...before, ...after];
      return { todoData: data}
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={ this.deleteItem} />
      </div>
    );
  }
};