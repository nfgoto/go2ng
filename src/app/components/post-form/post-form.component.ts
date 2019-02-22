import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  // event to emit when new post to be handled by other component
  @Output() newPostEvent: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPostEvent: EventEmitter<Post> = new EventEmitter();
  // properties set by input from other component
  @Input() currentPostInForm: Post;
  @Input() isEditForm: boolean;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }


  addPost(title: string, body: string) {
    if (!title || !body) {
      alert('Please Enter a Psot');
    } else {
      this.postService.addPost({ title, body } as Post).subscribe(
        post => {
          // emit a new post event with the post data in it
          // the emitted event and its data will be accessible in the template containing the app-post-form cmpnt
          // hence you will be able to set event binding to execute a handler of the containing cmpnt
          this.newPostEvent.emit(post);
        }
      );
    }
  }
  updatePost() {
    this.postService.editPost(this.currentPostInForm).subscribe(
      updatedPost => {
        console.log(updatedPost);
        this.isEditForm = false;
        this.updatedPostEvent.emit(updatedPost);
      }
    );
  }

}
