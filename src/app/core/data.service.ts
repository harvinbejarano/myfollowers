import { Follower } from './../follower';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http: HttpClient) { }
  
  getFollowers() {
    return this.http.get<Follower[]>(this.URL);
  }
}
