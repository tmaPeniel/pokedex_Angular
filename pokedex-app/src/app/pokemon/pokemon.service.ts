import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()

export class PokemonService {

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }
  
  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == id);
  }

  getPokemonTypes(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}
