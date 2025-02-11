import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadPokemonComponent } from '../load-pokemon/load-pokemon.component';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css'],
    imports: [NgIf, FormsModule, NgFor, LoadPokemonComponent, PokemonTypeColorPipe]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon;
  types :  string[];
  isAddForm : boolean;

  constructor(
    private pokemonService : PokemonService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(){
    // Si le formulaire est utilisé pour l'ajout d'un pokemon
    this.isAddForm = this.router.url.includes('add');
    
    // Pokemon Type liste
    this.types = this.pokemonService.getPokemonTypes();
    
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    } else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length === 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit(){

    // Si le formulaire est utilisé pour l'ajout d'un pokemon
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon)=> this.router.navigate(['/pokemon', pokemon.id]));
    } 
    // Si le formulaire est utilisé pour la modification d'un pokemon
    else{
    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(()=> this.router.navigate(['/pokemon', this.pokemon.id]));
    }
    
  }
}
