export interface Task {
  icon: string;
  title: string;
  text: string;
  task: string;
  ball: string;
  colorBg: string;
  id: string;
  date: string;
  link: string;
}

export interface CalendarItemsState {
  tasks: Task[];
}

export enum CalendarItemsActionTypes {
  UPDATE_TASK = "UPDATE_TASK",
  RESET_EDIT_STATE = "RESET_EDIT_STATE",
}

export interface UpdateTaskAction {
  type: CalendarItemsActionTypes.UPDATE_TASK;
  payload: Task;
}

export interface ResetEditStateAction {
  type: CalendarItemsActionTypes.RESET_EDIT_STATE;
}

export type CalendarItemsAction = UpdateTaskAction | ResetEditStateAction;
