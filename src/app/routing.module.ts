import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';


const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'users/:id',
        component: UserDetailComponent
      },
      {
        path: 'posts/:id',
        component: PostDetailComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      },
      { path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      { path: '**',
        redirectTo: '/users',
        pathMatch: 'full'
      }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ]
})
export class RoutingModule { }
