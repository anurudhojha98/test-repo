import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

getAllUser(){
   return this.http.get<any>('https://api.github.com/users?since=135');
}
getUserRepos(url){
  return this.http.get<any>(url);
}
}
