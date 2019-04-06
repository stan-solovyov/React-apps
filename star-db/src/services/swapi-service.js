export default class SwapiService {
    _baseUrl = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img'; 
    
    async  getResource(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received: ${response.status}`);
        }
        const body = await response.json();
        return body;
    }

    getAllPeople = async() => {
        const response = await this.getResource(`${this._baseUrl}/people`);
        return response.results.map(this._transformPerson).slice(0, 5);
    }

    getAllPlanets = async() => {
        const response = await this.getResource(`${this._baseUrl}/planets`);
        return response.results.map(this._transformPlanet).slice(0, 5);
    }

    getAllStarships = async() => {
        const response = await this.getResource(`${this._baseUrl}/starships`);
        return response.results.map(this._transformStarship).slice(0, 5);
    }

    getPerson = async(id) => {
        const person = await this.getResource(`${this._baseUrl}/people/${id}`);
        return this._transformPerson(person);
    }

    getPlanet = async(id) => {
        const planet = await this.getResource(`${this._baseUrl}/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getStarship = async(id) => {
        const starship = await this.getResource(`${this._baseUrl}/starships/${id}`);
        return  this._transformStarship(starship);
    }

    getPersonImage = async({id}) => {
        return `${this._imageBase}/characters/${id}.jpg` 
    };

    getPlanetImage = async({id}) => {
        return `${this._imageBase}/planets/${id}.jpg` 
    };

    getStarshipImage = async({id}) => {
        return `${this._imageBase}/starships/${id}.jpg` 
    };

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
