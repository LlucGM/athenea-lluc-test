import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  user!: {
    nom: string,
    cognom: string,
    email: string,
    dni: string
  };

  users: User[] = [];
  
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users') || "[]");
  }

  ngOnInit() {
    this.resetUser();
  }

  resetUser() {
    this.user = {
      nom: "",
      cognom: "",
      email: "",
      dni: ""
    };
  }

  submitForm() {
    //Validació del formulari
    this.users.push(this.user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.resetUser();
  }

}
