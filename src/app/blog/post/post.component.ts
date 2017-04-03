import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(res => {
        this.posts = res;
      });
  }

  removePost(post){
    this.postService.removePost(post.id)
      .subscribe(()=>{
        this.posts.splice(this.posts.indexOf(post), 1);
      });
  }

}
