import {
  CalendarItemsActionTypes,
  CalendarItemsState,
  CalendarItemsAction,
} from "./editTypes";
import calendarItems from "config/calendarItems";
import { format } from "date-fns";

const initialState: CalendarItemsState = {
  tasks: calendarItems,
};

export const editReducer = (
  state = initialState,
  action: CalendarItemsAction,
): CalendarItemsState => {
  let updatedTasks;
  switch (action.type) {
    case CalendarItemsActionTypes.UPDATE_TASK:
      updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...action.payload,
              date: format(new Date(action.payload.date), "yyyy-MM-dd"),
              link: "",
            }
          : task,
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case CalendarItemsActionTypes.RESET_EDIT_STATE:
      return initialState;
    default:
      return state;
  }
};
