import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
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

  // i18nPlural

  public clients: string[] = ['Santiago', 'Susana', 'Carlos', 'Juan', 'Pedro'];
  public clientsMap = {
    '=0': 'no clients',
    '=1': 'one client',
    'other': '# clients'
  };

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe

  public person = {
    name: 'Santiago',
    age: 21,
    address: 'Calle 123, Av 456'
  }

}
