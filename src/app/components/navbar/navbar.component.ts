import { Component } from '@angular/core';
import { NavigationArrayModel } from '../../models/navigation.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {
  public links: NavigationArrayModel = [
    {
      path: '/comics',
      text: 'Comics',
    },
    {
      path: '/characters',
      text: 'Characters',
    },
    {
      path: '/creators',
      text: 'Creators',
    },
    {
      path: '/series',
      text: 'Series',
    },
  ];
}
