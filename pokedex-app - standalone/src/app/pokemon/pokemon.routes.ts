import { Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { PokemonService } from "./pokemon.service";

export default [
    {
        path: '',
        providers: [PokemonService],
        children: [ 
        {
            path: 'add/pokemon', 
            title: 'Add Pokemon',
            loadComponent: ()=> import('./add-pokemon/add-pokemon.component').then(module=>module.AddPokemonComponent)
        },
        { 
            path: 'edit/pokemon/:id', 
            loadComponent: ()=> import('./edit-pokemon/edit-pokemon.component').then(module=>module.EditPokemonComponent) 
        },
        { 
            path: 'pokemons', 
            title: 'List Pokemon',
            loadComponent: ()=> import('./list-pokemon/list-pokemon.component').then(module=>module.ListPokemonComponent)
        },
        { 
            path: 'pokemon/:id', 
            loadComponent: ()=> import('./detail-pokemon/detail-pokemon.component').then(module=>module.DetailPokemonComponent)
        }
            
        ]
    }
   
] as Routes;
/*
export const routes: Routes = [
    {
        path: '',
        providers: [PokemonService],
        children: [ 
        {
            path: 'add/pokemon', 
            loadComponent: ()=> import('./add-pokemon/add-pokemon.component').then(module=>module.AddPokemonComponent)
        },
        { 
            path: 'edit/pokemon/:id', 
            loadComponent: ()=> import('./edit-pokemon/edit-pokemon.component').then(module=>module.EditPokemonComponent) 
        },
        { 
            path: 'pokemons', 
            loadComponent: ()=> import('./list-pokemon/list-pokemon.component').then(module=>module.ListPokemonComponent)
        },
        { 
            path: 'pokemon/:id', 
            loadComponent: ()=> import('./detail-pokemon/detail-pokemon.component').then(module=>module.DetailPokemonComponent)
        }
            
        ]
    }
   
]
*/