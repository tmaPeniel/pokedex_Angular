import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {
  pokemonList : Pokemon[];
  pokemon : Pokemon | undefined

  constructor(
    private route : ActivatedRoute, 
    private router : Router,
    private pokemonService: PokemonService
  ){}

  ngOnInit(){
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id'); 
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
       .subscribe(poke => this.pokemon = poke);
    }
  }

  deletePokemon(pokemon:Pokemon) {
    this.pokemonService.deletePokemonById(pokemon)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

  editPokemon(): void {
    this.router.navigate(['/edit/pokemon', this.pokemon?.id]);
  }
}
