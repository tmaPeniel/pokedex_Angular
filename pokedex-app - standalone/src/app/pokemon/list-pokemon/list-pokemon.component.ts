import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { NgFor, DatePipe } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    imports: [SearchPokemonComponent, NgFor, BorderCardDirective, RouterLink, DatePipe, PokemonTypeColorPipe]
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
     .subscribe(poke=> this.pokemons = poke);
  }
  
  goToPokemon(pokemon : Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
