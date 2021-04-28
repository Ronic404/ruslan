enum ActionTypes {
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
  SET_NAME = 'SET_NAME',
  RESET_NAME = 'RESET_NAME',
}

interface IState {
  isAnswered: boolean;
  numberOfDeals: number | null;
  name: string | null;
}

interface ISubmitAction {
  type: ActionTypes.SUBMIT;
  payload: number;
}

interface IResetAction {
  type: ActionTypes.RESET;
}

interface ISetNameAction {
  type: ActionTypes.SET_NAME;
  payload: string;
}

interface IResetNameAction {
  type: ActionTypes.RESET_NAME;
}

type Actions = 
  ISubmitAction | 
  IResetAction | 
  ISetNameAction | 
  IResetNameAction;

export { ActionTypes };
export type { IState, Actions };