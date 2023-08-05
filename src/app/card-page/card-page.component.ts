import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../app.component';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent {

  @Input() users: Array<User> = [];
  @Input() pages: Array<number> = [];
  @Input() current_page: number = 0;

  @Output() page = new EventEmitter<number>;

  pageQuery(page: number){
    this.page.emit(page);
  }

  @Output() profile = new EventEmitter<number>;

  profileQuery(id: number){
    this.profile.emit(id);
  }

  @Output() search = new EventEmitter<number>;

  searchQuery(id: number){
    this.search.emit(id);
  }

}
