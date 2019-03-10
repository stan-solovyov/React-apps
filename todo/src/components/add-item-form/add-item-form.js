import React, { Component } from 'react'
import './add-item-form.css';

export default class AddItemForm extends Component {
  onLabelChanged = (event)=> {
    this.setState({ label:event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({label:''});
  }

  state = {
    label:''
  }

  render() {
    return (
      <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
      <input type='text' className='form-control' onChange={this.onLabelChanged} placeholder='What needs to be done' value={this.state.label}></input>
        <button type='submit' className='btn btn-outline-secondary'>Add item</button>
      </form>
    )
  }
}
