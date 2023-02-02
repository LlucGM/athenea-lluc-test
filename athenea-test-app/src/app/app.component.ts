import { Component } from '@angular/core';
import usersJson from '../app/users.json';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  users: User[] = [];
  currentUser!: User;

  public appPages = [
    { title: 'Usuaris', url: 'users', icon: 'people' },
    { title: 'Nou usuari', url: 'new-user', icon: 'person-add' },
    { title: 'Perfil', url: 'profile', icon: 'person' },
  ];

  constructor() {
    usersJson.forEach(element => {
      this.users.push(new User(element.name, element.surname, element.email, element.id));
    });

    //RESET STORAGE USUARIS
    // localStorage.removeItem('users'); 

    if (localStorage.getItem('users') === null)
      localStorage.setItem('users', JSON.stringify(this.users));

    this.currentUser = new User("Lluc", "Gimenez", "lluc@gmail.com", "12345678A");
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }
}
