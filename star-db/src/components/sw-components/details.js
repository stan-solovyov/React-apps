import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';

const swapiService = new SwapiService();
const { 
    getPerson,
    getStarship,
    getPlanet,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const  PersonDetails = ({itemId})=> {
    return (<ItemDetails itemId={itemId} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender"></Record>
        <Record field="birthYear" label="Birth Year"></Record>
        <Record field="eyeColor" label="Eye Color"></Record>
      </ItemDetails>)
};
const  StarshipDetails = ({itemId})=> {
    return (
        <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
          <Record field="model" label="Model"></Record>
          <Record field="manufacturer" label="Manufacturer"></Record>
          <Record field="costInCredits" label="Cost In Credits"></Record>
          <Record field="length" label="Length"></Record>
          <Record field="crew" label="Crew"></Record>
        </ItemDetails>)
};
const  PlanetDetails = ({itemId})=> {
    return (
        <ItemDetails itemId={itemId} getData={getPlanet} getImageUrl={getPlanetImage}>
          <Record field="population" label="Population"></Record>
          <Record field="rotationPeriod" label="Rotation Period"></Record>
          <Record field="diameter" label="Diameter"></Record>
        </ItemDetails>)
};

export  { PersonDetails, StarshipDetails, PlanetDetails };