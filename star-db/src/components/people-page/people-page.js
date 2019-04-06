import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row'
import './people-page.css';
import SwapiService from '../../services/swapi-service';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };


  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople} >
      {(i) => `${i.name} (${i.birthYear})`}
    </ItemList>;

    const personDetails = <ItemDetails personId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}></Row>
      </ErrorBoundry>
    );
  }
}
