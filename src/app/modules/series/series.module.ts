import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const ROUTES = [
  {
    path: '',
    component: SeriesComponent,
  },
];

@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [RouterModule.forChild(ROUTES), CommonModule, ComponentsModule],
  exports: [RouterModule],
})
export class SeriesModule { }
