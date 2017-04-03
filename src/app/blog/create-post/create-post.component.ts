import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: any = {
    title: '',
    body: ''
  };

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
  }

  createPost(){
    this.postService.createPost(this.post)
      .subscribe(post=>this.router.navigate(['/posts', post.id]));
  }

}
