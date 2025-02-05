import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  standalone: false,
  
  template: `
    <h2 class="center">Ajouter un Pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon;

  ngOnInit(){
    this.pokemon = new Pokemon();
  }
}
