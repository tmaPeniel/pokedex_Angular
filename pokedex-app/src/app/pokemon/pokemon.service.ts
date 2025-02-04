import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
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
