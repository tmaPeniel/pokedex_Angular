import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
import { provideRouter, Routes } from '@angular/router';
import { AuthGuard } from './app/auth.guard';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import("./app/pokemon/pokemon.routes")
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import("./app/login/login.component").then(module => module.LoginComponent)
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then(module => module.PageNotFoundComponent)
    }
];


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
