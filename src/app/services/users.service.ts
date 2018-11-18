import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsersUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(readonly ajax: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.ajax.get(this.allUsersUrl);
  }

  getUserDetail(id: string): Observable<any> {
    return this.ajax.get(`${this.allUsersUrl}/${id}`);
  }

}