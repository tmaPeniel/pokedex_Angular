import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: false,
  templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  pokemons : Pokemon[];
  pok : any;
  pokemonSelected : Pokemon | undefined;
  
  constructor(
    private router : Router, 
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
     this.pokemonService.getPokemons()
     .subscribe(pok=> this.pokemons = pok);
     console.log(this.pokemons);
  }
  
  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
