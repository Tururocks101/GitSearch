import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public id:number,public avatar_url:string, 
        public name:string, public html_url:string, 
        public location:string, public public_repos:number, 
        public followers:number, public following:number, 
        public updated_at:Date
  ) { }
}
