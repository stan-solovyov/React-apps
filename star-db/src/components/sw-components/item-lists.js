import React from 'react';
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import { withData } from '../hoc-helpers'

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>
            {fn}
        </Wrapped>
    }
}


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>; 

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);
const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);

export { PersonList, StarshipList, PlanetList };