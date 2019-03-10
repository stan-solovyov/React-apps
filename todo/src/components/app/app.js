import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemForm from '../add-item-form/add-item-form'

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', done: false, important: false, id: 1 },
      { label: 'Make Awesome App', done: false, important: false, id: 2 },
      { label: 'Have a lunch', done: false, important: false, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(x => x.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const data = [...before, ...after];
      return { todoData: data }
    });
  }

  addItem = () => {
    this.setState(({ todoData }) => {
      const data = [...todoData];
      data.push({ label: 'Added item', done: false, important: false, id: todoData.length + 1 })
      return { todoData: data }
    });
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return { todoData: this.toggleProperty(todoData, id, 'important') };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return { todoData: this.toggleProperty(todoData, id, 'done') };
    });
  }

  toggleProperty = (array, id, propertyName) => {
    const newArray = [...array];
    const idx = newArray.findIndex(x => x.id === id);
    newArray[idx][propertyName] = !newArray[idx][propertyName];
    return newArray;
  };

  render() {
    const { todoData} = this.state;
    const doneCount = todoData.filter(x=>x.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddItemForm onAdded={this.addItem} />
      </div>
    );
  }
};