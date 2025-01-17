import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: false
})
export class AppComponent implements OnInit {
  pokemons : Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon | undefined;

  ngOnInit() {
      console.table(this.pokemons);
  }

  selectPokemon(pokemonId: string){
    const pokemon : Pokemon | undefined = this.pokemons.find(pokemon=> pokemon.id == +pokemonId);
    if(pokemon){
      console.log(`Vous avez selectionné : ${pokemon.name}. Il a ${pokemon.hp} point de vie.`);
      this.pokemonSelected = pokemon;
    }
    else{
      console.log(`Vous avez selectionné un pokemon  qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
  }
}
