import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemDetails, { Record } from '../item-details';
import { PersonList, PlanetList, StarshipList, PersonDetails, StarshipDetails, PlanetDetails } from '../sw-components';
import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    const personDetails = (<ItemDetails itemId={11} getData={this.swapiService.getPerson} getImageUrl={this.swapiService.getPersonImage}>
      <Record field="gender" label="Gender"></Record>
      <Record field="birthYear" label="Birth Year"></Record>
      <Record field="eyeColor" label="Eye Color"></Record>
    </ItemDetails>);

    const starshipDetails = (
    <ItemDetails itemId={5} getData={this.swapiService.getStarship} getImageUrl={this.swapiService.getStarshipImage}>
      <Record field="model" label="Model"></Record>
      <Record field="manufacturer" label="Manufacturer"></Record>
      <Record field="costInCredits" label="Cost In Credits"></Record>
      <Record field="length" label="Length"></Record>
      <Record field="crew" label="Crew"></Record>
    </ItemDetails>);

    return (
      <div className="stardb-app">
        <Header />
        <PersonList/>

        <PlanetList/>

        <StarshipList/>

        <PersonDetails itemId="1"></PersonDetails>
        <StarshipDetails itemId="11"></StarshipDetails>
        <PlanetDetails itemId="10"></PlanetDetails>
        
        {/* <Row left={personDetails} right={starshipDetails}></Row> */}

      </div>
    );
  }
}
