import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: false,
  templateUrl: './detail-pokemon.component.html'
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
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }
}
