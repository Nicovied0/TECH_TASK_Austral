import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./screens/pokemons/pokemons.module').then( m => m.PokemonsPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./screens/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./screens/form-comments/form-comments.module').then( m => m.FormCommentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
