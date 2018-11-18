import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { RoutingModule } from './routing.module';
import { UsersService } from './services/users.service';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { PostsService } from './services/posts.service';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, PostsComponent, UserDetailComponent,       PostDetailComponent, CreatePostComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, PostsService]
})
export class AppModule { }
