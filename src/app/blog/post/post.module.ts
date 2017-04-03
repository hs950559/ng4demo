import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostService } from './post.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PostRoutingModule
  ],
  declarations: [ PostComponent, PostDetailComponent, CreatePostComponent ],
  providers: [PostService]
})
export class PostModule { }
