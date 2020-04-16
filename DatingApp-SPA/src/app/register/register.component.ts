import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_service/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	@Output() cancelRegister = new EventEmitter();
	model: any = {};
	constructor(private aut: AuthService) {}

	ngOnInit() {}
	register() {
		this.aut.register(this.model).subscribe(
			() => {
				console.log('register Success');
			},
			(error) => {
				console.log(error);
			}
		);
		console.log(this.model);
	}
	cancel() {
		this.cancelRegister.emit(false);
		console.log('cancel');
	}
}