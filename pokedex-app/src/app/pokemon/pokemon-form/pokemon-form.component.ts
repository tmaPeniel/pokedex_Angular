import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  standalone: false,
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon;
  types :  string[];

  constructor(
    private pokemonService : PokemonService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(){
    // Pokemon Type liste
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId !== null) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => {
        if (pokemon) {
          this.pokemon = pokemon;
        } else {
          // handle the case when the pokemon is not found
          console.error(`Pokemon with id ${pokemonId} not found.`);
        }
      });
    }
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
    console.log("Submit form !");
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }
}
