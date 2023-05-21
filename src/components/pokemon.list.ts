import { Component } from './component';
import { PokemonRepository } from '../data/api.pokemon.repository';
import { Pokemon } from '../models/pokemon';

export class PokemonList extends Component {
  pokemon!: Pokemon[];
  list: PokemonRepository;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.list = new PokemonRepository();
  }

  async handleLoad() {
    this.pokemon = await this.list.getAll();
    this.render();
    console.log(this.element);
  }
}
