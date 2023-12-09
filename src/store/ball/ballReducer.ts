import {
  BallState,
  BallAction,
  initialState,
  BallActionTypes,
} from "./ballTypes";

export const ballReducer = (
  state: BallState = initialState,
  action: BallAction,
): BallState => {
  switch (action.type) {
    case BallActionTypes.ADD_BALL:
      return {
        ...state,
        balls: [...state.balls, action.payload],
        ballsGallery: [...state.ballsGallery, action.payload],
      };
    case BallActionTypes.ADD_TREE_BALL:
      return {
        ...state,
        treeBalls: [...state.treeBalls, action.payload],
      };
    case BallActionTypes.REMOVE_BALL:
      return {
        ...state,
        balls: state.balls.filter((ball) => ball !== action.payload),
      };
    case BallActionTypes.RESET_BALL_STATE:
      return initialState;
    default:
      return state;
  }
};
