import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  state = { itemList: null };

  async componentDidMount() {

    const { getData } = this.props;

    const items = await getData();
    this.setState({ itemList: items });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>);
    }
    );
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    )
  }
}
