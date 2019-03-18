import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  state = { peopleList: null };

  swapiService = new SwapiService();

  async componentDidMount() {
    const people = await this.swapiService.getAllPeople();
    this.setState({ peopleList: people });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const names = peopleList.map(({ id, name }) => {
      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>);
    }
    );

    return (
      <ul className="item-list list-group">
        {names}
      </ul>
    )
  }
}
