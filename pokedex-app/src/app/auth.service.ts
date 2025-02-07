import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor() { }

  //C'est un orbservable car il s'agit d'une operation asynchrone
  login(name:string, password:string): Observable<boolean>{
    const isLoggedIn = (name === 'admin' && password === 'admin');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );

  }

  logout(){
    this.isLoggedIn = false;
  }
}
