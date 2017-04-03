import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  baseUrl: string = 'http://localhost:3000/api/posts';

  constructor(private http: Http) { }
  
  getPosts(): Observable<any>{
    return this.http.get(this.baseUrl)
      .map(res=> res.json())
      .catch(err => Observable.throw(err));
  }

  getPost(id): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
      .map(res=> res.json())
      .catch(err => Observable.throw(err));
  }

  createPost(post): Observable<any>{
    return this.http.post(this.baseUrl, post)
      .map(res=> res.json())
      .catch(err => Observable.throw(err));
  }

  removePost(id): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
      .map(res=> res.json())
      .catch(err => Observable.throw(err));
  }
}
