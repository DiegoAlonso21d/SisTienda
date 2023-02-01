import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  showMenu = true;

  toogleMenu() {
    this.showMenu = !this.showMenu;
    console.log('click');
  }
}
