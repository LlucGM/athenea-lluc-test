import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user!: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    
    if (id == null) {
      this.user = JSON.parse(localStorage.getItem('currentUser') || "[]");
    } else {
      let users = JSON.parse(localStorage.getItem('users')!);
      users.forEach((element: User) => {
        if (element.dni == id) {
          this.user = element;
          return;
        }
      });
    }

    console.log(this.user)
  }
}
