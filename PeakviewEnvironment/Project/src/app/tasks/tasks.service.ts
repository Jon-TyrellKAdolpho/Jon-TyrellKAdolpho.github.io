import { Injectable } from '@angular/core';

import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      seasonId: 's1',
      title: 'Example Event',
      summary:
        'Here is the example event for people to see.',
      startDate: '2025-11-15',
      endDate: '2025-12-31',
    },
    {
      id: 't2',
      seasonId: 's3',
      title: 'Example Event',
      summary: 'Here is the example event for people to see.',
      startDate: '2024-04-26',
      endDate: '2024-05-31',
    },
    {
      id: 't3',
      seasonId: 's3',
      title: 'Example Event',
      summary:
        'Here is the example event for people to see.',
      startDate: '2025-04-12',
      endDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getSeasonTasks(seasonId: string) {
    return this.tasks.filter((task) => task.seasonId === seasonId);
  }

  addTask(taskData: NewTaskData, seasonId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      seasonId: seasonId,
      title: taskData.title,
      summary: taskData.summary,
      startDate: taskData.startDate,
      endDate: taskData.endDate,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
