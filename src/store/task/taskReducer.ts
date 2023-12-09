import {
  TaskState,
  TaskAction,
  initialState,
  TaskActionTypes,
} from "./taskTypes";

export const taskReducer = (
  state: TaskState = initialState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD_COMPLETED_TASK:
      return {
        ...state,
        completedTasks: [...state.completedTasks, action.payload],
      };
    case TaskActionTypes.IS_COMPLETED_TASK:
      return {
        ...state,
        isCompleted: {
          ...state.isCompleted,
          [action.payload.id]: action.payload.value,
        },
      };
    case TaskActionTypes.RESET_TASK_STATE:
      return initialState;
    default:
      return state;
  }
};
