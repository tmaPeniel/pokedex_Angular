import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent {
  pokemons : Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon | undefined;

  constructor(private router : Router){}
  
  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
