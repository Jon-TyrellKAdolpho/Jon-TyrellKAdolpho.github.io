import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type Season } from './season.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-season',
    standalone: true,
    templateUrl: './season.component.html',
    styleUrl: './season.component.css',
    imports: [CardComponent]
})
export class SeasonComponent {
  @Input({ required: true }) season!: Season;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  onSelectSeason() {
    this.select.emit(this.season.id);
  }
}
