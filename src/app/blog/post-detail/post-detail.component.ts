import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      const id = res['id'];
      this.postService.getPost(id)
        .subscribe( res1 => {
          this.post = res1;
        });
    });
  }

}
