import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and Dates',
            icon: 'pi pi-align-left'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar'
          },
          {
            label: 'No commons',
            icon: 'pi pi-globe'
          },
        ]
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Other element...',
            icon: 'pi pi-cog'
          },
        ]
      }
    ];
  }
}
