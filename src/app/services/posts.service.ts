import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Post } from '../models/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    // httpClient methods return an observable
    return this.http.get<Post[]>(this.postsUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  editPost(post: Post): Observable<Post> {
    const updateUrl = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(updateUrl, post, httpOptions);
  }

  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const deleteUrl = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(deleteUrl);
  }
}
