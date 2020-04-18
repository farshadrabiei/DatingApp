import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private aut: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}
  register() {
    this.aut.register(this.model).subscribe(
      () => {
        this.alertify.success('register Success');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
