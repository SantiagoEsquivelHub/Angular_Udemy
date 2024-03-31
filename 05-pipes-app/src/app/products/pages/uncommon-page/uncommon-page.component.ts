import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((data) => console.log('Timer executed', data))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('There are data on promise');
      resolve('There are data on promise');
    }, 4000);
  });

}
