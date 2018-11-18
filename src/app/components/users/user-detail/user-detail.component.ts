import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  sub: any;
  user: any;
  constructor(private us: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.us.getUserDetail(params['id']).subscribe(
         (res: any) => {
           this.user = res;
         }
       );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}