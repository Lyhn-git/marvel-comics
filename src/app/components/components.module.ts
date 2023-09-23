import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const COMPONENTS = [
  NavbarComponent,
  PaginationComponent,
  ModalComponent,
  CharacterDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
