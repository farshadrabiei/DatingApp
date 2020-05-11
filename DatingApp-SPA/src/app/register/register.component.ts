import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from '../_model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  constructor(
    private aut: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  registerForm: FormGroup;
  ngOnInit() {
    // this.registerForm = new FormGroup(
    //   {
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(8),
    //     ]),
    //     confirmPassword: new FormControl('', Validators.required),
    //   },
    //   this.passwordMatchValidator
    // );
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        gender: ['male'],
        username: ['', Validators.required],
        knownAs: ['', Validators.required],
        dateOfBirth: [null, Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }
  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);

      this.aut.register(this.user).subscribe(
        () => {
          this.alertify.success('Registration Successful');
        },
        (error) => {
          this.alertify.error(error);
        },
        () => {
          this.aut.login(this.user).subscribe(() => {
            this.router.navigate(['/members']);
          });
        }
      );
    }
    // this.aut.register(this.model).subscribe(
    //   () => {
    //     this.alertify.success('register Success');
    //   },
    //   (error) => {
    //     this.alertify.error(error);
    //   }
    // );

    console.log(this.registerForm.value);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
