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
    const addedPost = {
      ...post,
      // because JSON placeholder API always return id = 101
      id: this.posts.length + 1
    };
    this.posts.unshift(addedPost);
    // reset form
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
      // this.posts = this.posts.filter(p => p.id !== post.id);
      this.postService.deletePost(post).subscribe(
        delPost => {
          this.posts = this.posts.filter(p => {
            return p.id !== post.id;
          }
          );
        }
      );
    }
  }
}
