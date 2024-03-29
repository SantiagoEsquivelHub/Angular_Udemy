import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Santiago';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invite him',
    'female': 'invite her'
  }

  changePerson() {
    this.name = 'Susana'
    this.gender = 'female'
  }
}
