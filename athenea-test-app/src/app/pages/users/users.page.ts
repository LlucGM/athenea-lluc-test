import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  
  users: User[] = [];
  usersFilter: User[] = [];
  usersFinal: User[] = [];
  p: number = 1;
  clickState = 0;
  lastClick = 0;

  constructor(public router: Router) {
    this.users = JSON.parse(localStorage.getItem('users') || "[]");
    this.usersFilter = this.users;
    this.usersFinal = this.users;
  }

  ngOnInit() {
    this.sortUsers(1);
  }
  
  //ORDENACIÓ
  //1 = nom, 2 = cognom, 3 = email, 4 = dni
  //1 = asc, -1 = desc
  sortUsers(col: number) {
    if (col == this.lastClick) {
      if (this.clickState == 2) {
        this.clickState = 1;
        this.usersFilter.sort((a, b) => (this.ret(a) > this.ret(b)) ? 1 : -1);
      } else {
        this.clickState = 2;
        this.usersFilter.sort((a, b) => (this.ret(a) < this.ret(b)) ? 1 : -1);
      }
    } else {
      this.lastClick = col;
      this.clickState = 1;
      this.usersFilter.sort((a, b) => (this.ret(a) > this.ret(b)) ? 1 : -1);
    }

    this.usersFinal = this.usersFilter;
  }

  ret(elem: User) {
    switch (this.lastClick) {
      case 2:
        return elem.cognom;
      case 3:
        return elem.email;
      case 4:
        return elem.dni;
      default:
        return elem.nom;
    }
  }

  searchUsers(event: any) {
    const query = event.target.value.toLowerCase();
    this.usersFinal = this.usersFilter.filter(user => {return user.nom.includes(query) || user.cognom.includes(query) || user.email.includes(query) || user.dni.includes(query)});
  }
}
