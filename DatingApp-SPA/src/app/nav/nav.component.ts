import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public auth: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      (next) => {
        this.alertify.success('login success');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }

  logedin() {
    return this.auth.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logout user');
  }
}
