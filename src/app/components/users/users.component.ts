import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: [];
  sub: any;
  constructor(private us: UsersService) { }

  ngOnInit() {
    this.sub = this.us.getAllUsers().subscribe(
      (res: []) => {
        this.users = res;
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}