import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const ROUTES = [
  {
    path: '',
    component: CreatorsComponent,
  },
];

@NgModule({
  declarations: [
    CreatorsComponent
  ],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ComponentsModule],
  exports: [RouterModule],
})
export class CreatorsModule { }
