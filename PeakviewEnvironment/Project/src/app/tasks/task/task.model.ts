export interface Task {
  id: string;
  seasonId: string;
  title: string;
  summary: string;
  startDate: string;
  endDate: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  startDate: string;
  endDate: string;
}
