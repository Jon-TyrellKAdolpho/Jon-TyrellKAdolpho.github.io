import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) seasonId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredStartDate = '';
  enteredEndDate = '';
  errorMessage = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const currentDate = new Date();
    if (this.enteredTitle == '' || this.enteredSummary == ''){
      this.errorMessage = 'Event must have a title and summary.'
      return;
    }
    if (new Date(this.enteredStartDate) <= currentDate) {
      this.errorMessage = 'Start date must be in the future.';
      return;
    }
    if (new Date(this.enteredEndDate) <= new Date(this.enteredStartDate)) {
      this.errorMessage = 'End date must be after the start date.';
      return;
    }
    if (!this.enteredEndDate || !this.enteredStartDate) {
      this.errorMessage = 'Must enter start and end dates.';
      return;
    }
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        startDate: this.enteredStartDate,
        endDate: this.enteredEndDate,
      },
      this.seasonId
    );
    this.close.emit();
  }
}
