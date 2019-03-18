export default class SwapiService {
    _baseUrl = 'https://swapi.co/api';
    async  getResource(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received: ${response.status}`);
        }
        const body = await response.json();
        return body;
    }

    async getAllPeople() {
        const response = await this.getResource(`${this._baseUrl}/people`);
        return response.results.map(this._transformPerson);
    }

    async getAllPlanets() {
        const response = await this.getResource(`${this._baseUrl}/planets`);
        return response.results.map(this._transformPlanet);
    }

    async getAllStarships () {
        const response = await this.getResource(`${this._baseUrl}/starships`);
        return response.results.map(this._transformStarship);
    }

    async getPerson(id) {
        const person = await this.getResource(`${this._baseUrl}/people/${id}`);
        return this._transformPerson(person);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`${this._baseUrl}/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getStarship(id) {
        const starship = await this.getResource(`${this._baseUrl}/starships/${id}`);
        return  this._transformStarship(starship);
    }

    _transformPlanet = (planet) => {
        return  {
            id: this._extractId(planet.url),
            name: planet.name, 
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }

    _transformStarship = (starship) => {
        return  {
            id: this._extractId(starship.url),
            name: starship.name, 
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
          }
    }

    _transformPerson = (person) => {
        return  {
            id: this._extractId(person.url),
            name: person.name, 
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
          }
    }

    _extractId(url) {
        return /\/([0-9]*)\/$/.exec(url)[1];
    }
}
