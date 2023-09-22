import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const ROUTES = [
  {
    path: '',
    component: CharactersComponent,
  },
];

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ComponentsModule],
  exports: [RouterModule],
})
export class CharactersModule { }



