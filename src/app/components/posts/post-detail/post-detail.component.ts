import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  sub: any;
  post: any;
  constructor(private ps: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.ps.getPostDetail(params['id']).subscribe(
         (res: any) => {
           this.post = res;
         }
       );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}