import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'santiago sánchez';
  public nameUpper: string = 'SANTIAGO SÁNCHEZ';
  public fullName: string = 'sAnTiAgO sÁnChEz';
}
