import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  submitted: boolean = false;
  success: boolean = true;
  error: boolean = true;
  constructor(private formBuilder: FormBuilder, private ps: PostsService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.maxLength(24), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
            body: ['', [Validators.required, Validators.maxLength(50)]],
        });
  }

  get f() { return this.postForm.controls; }

  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.postForm.invalid) {
            return;
        }

        this.createPost(this.postForm.value);
  }

  createPost({title, body}) {
    this.ps.createPost(title, body).subscribe(
      (res: any) => {
        this.success = false;
      },
      err => this.error = false 
    )
  }

}