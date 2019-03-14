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
        return response.results;
    }

    async getAllPlanets() {
        const response = await this.getResource(`${this._baseUrl}/planets`);
        return response.results;
    }

    async getAllStarships () {
        const response = await this.getResource(`${this._baseUrl}/starships`);
        return response.results;
    }

    async getPerson(id) {
        return await this.getResource(`${this._baseUrl}/people/${id}`)
    }

    async getPlanet(id) {
        return await this.getResource(`${this._baseUrl}/planets/${id}`)
    }

    async getStarship(id) {
        return await this.getResource(`${this._baseUrl}/starships/${id}`)
    }
}