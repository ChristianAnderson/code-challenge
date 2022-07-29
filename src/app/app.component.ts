import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Search Food', url: '/folder/search', icon: 'fast-food' },
    
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' }
  ];

  constructor() {}
}
