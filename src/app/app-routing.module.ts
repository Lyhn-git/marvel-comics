import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    pathMatch: 'full'  
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then((m) => m.CharactersModule),
    pathMatch: 'full'  
  },
  {
    path: 'comics',
    loadChildren: () => import('./modules/comics/comics.module').then((m) => m.ComicsModule),
    pathMatch: 'full'  
  },
  {
    path: 'creators',
    loadChildren: () => import('./modules/creators/creators.module').then((m) => m.CreatorsModule),
    pathMatch: 'full'  
  },
  {
    path: 'series',
    loadChildren: () => import('./modules/series/series.module').then((m) => m.SeriesModule),
    pathMatch: 'full'  
  },
  // { path: '404', loadChildren: () => import('./modules/errors/page-not-found/page-not-found.module').then(x => x.PageNotFoundModule) },
  // { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
    ComponentsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
