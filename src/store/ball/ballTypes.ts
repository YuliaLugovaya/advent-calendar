export interface BallState {
  balls: string[];
  ballsGallery: string[];
  treeBalls: string[];
}

export const initialState: BallState = {
  balls: [],
  ballsGallery: [],
  treeBalls: [],
};

export enum BallActionTypes {
  ADD_BALL = "ADD_BALL",
  ADD_TREE_BALL = "ADD_TREE_BALL",
  REMOVE_BALL = "REMOVE_BALL",
  RESET_BALL_STATE = "RESET_BALL_STATE",
}

export interface AddBallAction {
  type: BallActionTypes.ADD_BALL;
  payload: string;
}

export interface AddTreeBallAction {
  type: BallActionTypes.ADD_TREE_BALL;
  payload: string;
}

export interface RemoveBallAction {
  type: BallActionTypes.REMOVE_BALL;
  payload: string;
}

export interface ResetBallStateAction {
  type: BallActionTypes.RESET_BALL_STATE;
}

export type BallAction =
  | AddBallAction
  | AddTreeBallAction
  | RemoveBallAction
  | ResetBallStateAction;
