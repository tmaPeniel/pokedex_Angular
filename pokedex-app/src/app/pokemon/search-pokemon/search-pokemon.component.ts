import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: false,
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit {
  searchTerm = new Subject<string>(); //searchTerm: stocke les recherches successif de l'utilateur dans le temps, sous forme de chaine de caractères 
  pokemons$: Observable<Pokemon[]>; //Liste des pokemons correspondant à la recherche

  constructor(
    private pokemonService: PokemonService,
    private router : Router
  ) { }

  ngOnInit(){
    this.pokemons$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term)=> this.pokemonService.searchPokemons(term))
    )
  }
  
  search(term:string){
    this.searchTerm.next(term);
  }

  //Méthode de navigation vers le détail d'un pokemon
  goToDetail(pokemon: Pokemon){
    //construire le lien vers le détail du pokemon
    const link = ['/pokemon', pokemon.id];
    //naviguer vers la page de détail du pokemon
    this.router.navigate(link);
  }
}
