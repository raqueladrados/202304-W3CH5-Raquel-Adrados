import { Pokemon } from '../models/pokemon';

export class PokemonRepository {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';
  }

  async getAll() {
    const response = await fetch(this.url).then((response) => response.json);
    console.log(response);
    return response;
  }

  async create(pokemon: any) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemon),
    });
    return response.json;
  }

  async update(pokemon: Partial<Pokemon>) {
    const response = await fetch(this.url, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  }

  async delete() {
    const response = await fetch(this.url, {
      method: 'DELETE',
    });
    return response.ok;
  }
}
