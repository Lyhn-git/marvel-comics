import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const ROUTES = [
  {
    path: '',
    component: ComicsComponent,
  },
];

@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ComponentsModule],
  exports: [RouterModule],
})
export class ComicsModule { }
