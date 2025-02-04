import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  standalone: false,
  
  template: `
    <h2 class = "center">Editer {{pokemon?.name}}</h2>
    <p class = "center">
      <img *ngIf = "pokemon" [src] = "pokemon.picture">
    </p>
    <app-pokemon-form *ngIf = "pokemon" [pokemon] = "pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent {
  pokemon : Pokemon | undefined;

  constructor(
    private route : ActivatedRoute,
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id'); 
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

}
