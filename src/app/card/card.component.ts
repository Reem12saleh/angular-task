import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() first_name: string = '';
  @Input() last_name: string = '';
  @Input() email: string = '';
  @Input() avatar: string = '';
  age: number = 20;
}
