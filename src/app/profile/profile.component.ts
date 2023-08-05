import { Component, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() profile: User = {} as User;
}
