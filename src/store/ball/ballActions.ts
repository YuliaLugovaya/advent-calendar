import {
  BallActionTypes,
  AddBallAction,
  AddTreeBallAction,
  RemoveBallAction,
  ResetBallStateAction,
} from "./ballTypes";

export const addBall = (payload: string): AddBallAction => {
  return {
    type: BallActionTypes.ADD_BALL,
    payload,
  };
};

export const addTreeBall = (payload: string): AddTreeBallAction => {
  return {
    type: BallActionTypes.ADD_TREE_BALL,
    payload,
  };
};

export const removeBall = (payload: string): RemoveBallAction => {
  return {
    type: BallActionTypes.REMOVE_BALL,
    payload,
  };
};

export const resetBallState = (): ResetBallStateAction => {
  return {
    type: BallActionTypes.RESET_BALL_STATE,
  };
};
