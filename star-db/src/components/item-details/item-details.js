import React, { Component } from 'react';
import './item-details.css';
import ErrorButton from "../error-button/error-button";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  async updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    const itemDetails = await getData(itemId);
    const image = await getImageUrl(itemDetails)
    this.setState({ item: itemDetails, image });
  }

  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span>Select an item from a list</span>;
    }

    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}