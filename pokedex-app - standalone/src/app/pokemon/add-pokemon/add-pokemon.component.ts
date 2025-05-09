import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';

@Component({
    selector: 'app-add-pokemon',
    template: `
    <h2 class="center">Ajouter un Pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
    styles: ``,
    imports: [PokemonFormComponent]
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit(){
    this.pokemon = new Pokemon();
  }
}
