/* eslint-disable no-undef */
import { Component } from './component';
import { PokemonList } from '../models/pokemon';
import { PokemonRepository } from '../data/api.pokemon.repository';

export class Card extends Component {
  pokemon!: DataPokemon[][];
  repository: ApiPokemon;

  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
  }

  render() {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
  }

  async handleLoad() {
    this.pokemon = await this.dataPokemon.getAll();
    this.render();
    console.log(this.element);
  }
}
