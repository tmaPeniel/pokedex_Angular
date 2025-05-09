import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { NgIf } from '@angular/common';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-edit-pokemon',
    template: `
    <h2 class = "center">Editer {{pokemon?.name}}</h2>
    <p class = "center">
      <img *ngIf = "pokemon" [src] = "pokemon.picture">
    </p>
    <app-pokemon-form *ngIf = "pokemon" [pokemon] = "pokemon"></app-pokemon-form>
  `,
    styles: ``,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent {
  pokemon : Pokemon | undefined;
  

  constructor(
    private route : ActivatedRoute,
    private pokemonService: PokemonService,
    private title : Title
  ){}

  ngOnInit(){
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id'); 
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(poke =>{
        this.pokemon = poke;
        this.initTitle(poke);
      } );
    }
  }

  initTitle(pokemon: Pokemon | undefined){
    if(!pokemon){
      this.title.setTitle("Pokemon not found");
      return;
    }

    this.title.setTitle(`Edit ${pokemon.name}`);
  }

}
