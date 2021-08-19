import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalhe-pokemon',
    loadChildren: () => import('./detalhe-pokemon/detalhe-pokemon.module').then( m => m.DetalhePokemonPageModule)
  },
  {
    path: 'detalhes-pokemon',
    loadChildren: () => import('./pokemons/detalhe-pokemon/detalhe-pokemon.module').then( m => m.DetalhePokemonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
