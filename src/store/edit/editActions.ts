import {
  CalendarItemsActionTypes,
  ResetEditStateAction,
  Task,
  UpdateTaskAction,
} from "./editTypes";

export const updateTask = (task: Task): UpdateTaskAction => ({
  type: CalendarItemsActionTypes.UPDATE_TASK,
  payload: task,
});

export const resetEditState = (): ResetEditStateAction => {
  return {
    type: CalendarItemsActionTypes.RESET_EDIT_STATE,
  };
};
