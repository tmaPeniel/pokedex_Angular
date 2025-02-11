import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PokemonService } from './pokemon/pokemon.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pokemon/pokemon.routes')
  },
  { 
    path: 'login', 
    loadComponent: () => import ('./login/login.component').then(module=>module.LoginComponent)
  },
  { 
    path: '**', 
    loadComponent: ()=> import('./page-not-found/page-not-found.component').then(module=>module.PageNotFoundComponent) 
  }
];


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        RouterModule.forRoot(routes),
        PageNotFoundComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
