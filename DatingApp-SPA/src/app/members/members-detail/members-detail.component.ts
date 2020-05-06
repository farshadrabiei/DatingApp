import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_model/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css'],
})
export class MembersDetailComponent implements OnInit {
  user: User;
  environment = environment;
  images: any[] = [];
  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });

    for (const img of this.user.photos) {
      this.images.push({
        source: environment.imageUrl + img.url,
        alt: this.user.username,
        title: this.user.username,
      });
    }
  }
}
