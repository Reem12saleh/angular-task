import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PageResponse{
  data: User[];
  page: number;
  total_pages: number;
}
interface ProfileResponse{
  data: User;
}
export interface User{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page';

  readonly root_url: string = 'https://reqres.in/api';
  
  current_view: string = 'list'; // 'list', 'profile'

  current_page: number = 1;
  pages: Array<number> = [];
  users: Array<User> = [];

  profile: User = {} as User;

  constructor(private http: HttpClient){
    setTimeout(() => {
      this.getUsers(this.current_page);
    }, 1);
  }

  getUsers(page: number = 1, id: number = 0){
    this.current_view = 'list'
    if (id == 0){
      this.http.get<PageResponse>(this.root_url + '/users?page=' + page).subscribe((res) => {
        this.users = res.data;
        this.pages = Array(res.total_pages).fill(1).map((val, index) => index + 1);
        this.current_page = page;
      })
    } else {
      this.users = [];
      this.http.get<ProfileResponse>(this.root_url + '/users?id=' + id).subscribe((res) => {
        this.users.push(res.data);
        console.log(res.data);
      })
    }
  }

  getUser(id: number = 0){
    if (id != 0){
      this.current_view = 'profile';
      this.http.get<ProfileResponse>(this.root_url + '/users/' + id).subscribe((res) => {
        this.profile = res.data;
        console.log(res.data);
      })
    }
  }

  toMenu(){
    this.current_view = 'list';
    this.profile = {} as User;
  }

}
