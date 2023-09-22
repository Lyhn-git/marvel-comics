import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: []
})
export class AppComponent {
  title = 'marvel-comics';
}

