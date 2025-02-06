import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> {
        console.log(error);
        return of([]);
      })
    );
  }
  
  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> {
        console.log(error);
        return of(undefined);
      })
    );
  }

  //Ces methodes permettent de persister sur le serveur les actions sur les données
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> {
        console.log(error);
        return of(pokemon);
      })
    )

  }

  updatePokemon(pokemon:Pokemon): Observable<Pokemon> {
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> {
        console.log(error);
        return of(pokemon);
      })
    );
  }

  deletePokemonById(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`api/pokemons/${pokemon.id}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> {
        console.log(error);
        return of(pokemon);
      })
    );
  }

  private log(response: Pokemon | Pokemon[]) {
    console.table(response);
  }

  getPokemonTypes(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}
