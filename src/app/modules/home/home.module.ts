import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const ROUTES = [
  {
    path: '',
    component: HomeComponent,
  },
];


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
