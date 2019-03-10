import React, { Component } from 'react'
import './add-item-form.css';

export default class AddItemForm extends Component {
  render() {
    const { onAdded } = this.props;
    return (
      <div className='item-add-form'>
        <button type='button' className='btn btn-outline-secondary' onClick={onAdded}>Add new item</button>
      </div>
    )
  }
}
