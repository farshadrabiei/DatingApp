import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_model/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { AuthService } from 'src/app/_service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  environment = environment;
  photoUrl:string;
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private alrtify: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });
    this.authService.currentPhotoUrl.subscribe(p=>this.photoUrl = p);
  }

  updateUser() {
    this.userService
      .updateUser(this.authService.decodedToken.nameid, this.user)
      .subscribe(
        (next) => {
          this.alrtify.success('Your Profile Update');
          this.editForm.reset(this.user);
        },
        (error) => {
          this.alrtify.error(error);
        }
      );
  }
  updateMainPhoto(photoUrl) {
    this.user.photoUrl = photoUrl;
  }
}
