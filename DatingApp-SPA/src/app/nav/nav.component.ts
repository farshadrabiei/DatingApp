import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [ './nav.component.css' ]
})
export class NavComponent implements OnInit {
	model: any = {};
	constructor(private auth: AuthService) {}

	ngOnInit() {}

	login() {
		this.auth.login(this.model).subscribe(
			(next) => {
				console.log('login success');
			},
			(error) => {
				console.log('failed login');
			}
		);
	}

	logedin() {
		const token = localStorage.getItem('token');
		return !!token;
	}
	logout() {
		localStorage.removeItem('token');
		console.log('logout user');
	}
}
