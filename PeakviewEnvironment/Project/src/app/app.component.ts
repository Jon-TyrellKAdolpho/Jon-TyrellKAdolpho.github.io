import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SeasonComponent } from './season/season.component';
import { SEASONS } from './seasons';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, SeasonComponent, TasksComponent]
})
export class AppComponent {
  seasons = SEASONS;
  selectedSeasonId?: string;

  get selectedSeason() {
    return this.seasons.find((season) => season.id === this.selectedSeasonId);
  }

  onSelectSeason(id: string) {
    this.selectedSeasonId = id;
  }
}
