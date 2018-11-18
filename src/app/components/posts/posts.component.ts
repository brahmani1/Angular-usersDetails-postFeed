import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: [];
  sub: any;
  constructor(private ps: PostsService) { }

  ngOnInit() {
    this.sub = this.ps.getAllPosts().subscribe(
      (res: []) => {
        this.posts = res;
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}