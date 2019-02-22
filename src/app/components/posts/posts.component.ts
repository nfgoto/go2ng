import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

const initialCurrentPostSate: Post = {
  id: 0,
  title: '',
  body: ''
};

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = { ...initialCurrentPostSate };
  isEdit: boolean = false;


  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe(
        posts => this.posts = posts
      );
  }

  onNewPostHandler(post: Post) {
    this.posts.unshift(post);
    this.currentPost = { ...initialCurrentPostSate };
  }

  editPost(post: Post) {
    this.isEdit = true;
    this.currentPost = post;
  }

  onUpdatedPostHandler(post: Post) {
    this.posts.forEach((p, idx) => {
      if (p.id === post.id) {
        // remove post from array
        this.posts.splice(idx, 1);
        // add updated post to the top
        this.posts.unshift(post);
        this.isEdit = false;
        // reset form
        this.currentPost = { ...initialCurrentPostSate };
      }
    });
  }

  deletePost(post: Post) {
    if (confirm('Are you sure')) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    }
  }
}
