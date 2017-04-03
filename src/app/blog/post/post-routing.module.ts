import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { CreatePostComponent } from '../create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: PostComponent
    },
    {
      path: 'create',
      component: CreatePostComponent
    },
    {
      path: ':id',
      component: PostDetailComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
