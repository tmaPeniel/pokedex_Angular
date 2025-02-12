import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';


export const AuthGuard = () => {

  
    const authService = inject (AuthService)
    const router = inject (Router)


    if(authService.isLoggedIn){
      return true;
    } 
      router.navigate(['/login']);
      return false; 
  };

/* Classe
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn){
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }   
  };
}
*/