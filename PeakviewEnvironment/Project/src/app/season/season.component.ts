import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './season.component.html',
    styleUrl: './season.component.css',
    imports: [CardComponent]
})
export class SeasonComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  onSelectSeason() {
    this.select.emit(this.user.id);
  }
}