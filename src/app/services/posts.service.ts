import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  allPostsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  createPostUrl: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(readonly ajax: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.ajax.get(this.allPostsUrl);
  }

  getPostDetail(id: string): Observable<any> {
    return this.ajax.get(`${this.allPostsUrl}/${id}`);
  }

  createPost(postTitle: string, postBody: string): Observable<any> {
    return this.ajax.post(this.createPostUrl, {
                              method: 'POST',
                              body: JSON.stringify({  
                                      title: 'foo',
                                      body: 'bar',
                                      userId: 1
                              }),
                              headers: {
                                "Content-type": "application/json; charset=UTF-8"
                              }
            })
  }

}