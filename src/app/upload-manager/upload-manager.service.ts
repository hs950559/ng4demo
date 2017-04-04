import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiConfig } from "../shared/api.config";


@Injectable()
export class MediaService {

  constructor(private http: Http, private apiConfig: ApiConfig) { }

  getMedia(): Observable<any> {
    return this.http.get(ApiConfig.mediaPath)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  removeMedia(name): Observable<any> {
    return this.http.delete(`${ApiConfig.mediaPath}/${name}`)
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }
}
