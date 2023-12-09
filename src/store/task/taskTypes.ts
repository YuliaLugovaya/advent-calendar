export interface TaskState {
  completedTasks: string[];
  isCompleted: Record<string, boolean>;
}

export const initialState: TaskState = {
  completedTasks: [],
  isCompleted: {},
};

export enum TaskActionTypes {
  ADD_COMPLETED_TASK = "ADD_COMPLETED_TASK",
  IS_COMPLETED_TASK = "IS_COMPLETED_TASK",
  RESET_TASK_STATE = "RESET_TASK_STATE",
}

export interface AddCompletedTaskAction {
  type: TaskActionTypes.ADD_COMPLETED_TASK;
  payload: string;
}

export interface IsCompletedTaskAction {
  type: TaskActionTypes.IS_COMPLETED_TASK;
  payload: { id: string; value: boolean };
}

export interface ResetTaskStateAction {
  type: TaskActionTypes.RESET_TASK_STATE;
}

export type TaskAction =
  | AddCompletedTaskAction
  | IsCompletedTaskAction
  | ResetTaskStateAction;
