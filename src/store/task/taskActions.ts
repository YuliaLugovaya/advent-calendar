import {
  TaskActionTypes,
  AddCompletedTaskAction,
  IsCompletedTaskAction,
  ResetTaskStateAction,
} from "./taskTypes";

export const addCompletedTask = (payload: string): AddCompletedTaskAction => {
  return {
    type: TaskActionTypes.ADD_COMPLETED_TASK,
    payload,
  };
};

export const isCompletedTask = (payload: {
  id: string;
  value: boolean;
}): IsCompletedTaskAction => {
  return {
    type: TaskActionTypes.IS_COMPLETED_TASK,
    payload,
  };
};

export const resetTaskState = (): ResetTaskStateAction => {
  return {
    type: TaskActionTypes.RESET_TASK_STATE,
  };
};
