enum ActionTypes {
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
  SET_NAME = 'SET_NAME',
  RESET_NAME = 'RESET_NAME',
}

interface IPerson {
  isAnswered: boolean;
  numberOfDeals: number | null;
  name: string | null;
}
interface IState {
  person: IPerson,
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
export type { IPerson, IState, Actions };