import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';
import { MenuItem } from 'primeng/api/menuitem';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  items: MenuItem[];
  constructor(public auth: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.items = [
      { styleClass: 'mt-t', label: 'ویرایش پروفایل', icon: 'fa fa-user' },
      { separator: true },
      {
        styleClass: 'mt-t',
        label: 'خروج',
        icon: 'fa fa-sign-out',
        command: (event) => {
          this.logout();
        },
      },
    ];
  }

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
