export interface Task {
  id: string;
  userId: string;
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
