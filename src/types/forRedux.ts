enum ActionTypes {
  SUBMIT = 'SUBMIT',
  RESET = 'RESET',
  SET_NAME = 'SET_NAME',
  RESET_NAME = 'RESET_NAME',
  SHOW_TIP = 'SHOW_TIP',
}

interface IPerson {
  isAnswered: boolean;
  numberOfDeals: number | null;
  name: string | null;
}

interface ITip {
  showTip: boolean,
}
interface IState {
  person: IPerson,
  tip: ITip,
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

interface IShowTipAction {
  type: ActionTypes.SHOW_TIP;
  payload: boolean;
}

type Actions = 
  ISubmitAction | 
  IResetAction | 
  ISetNameAction | 
  IResetNameAction |
  IShowTipAction;

export { ActionTypes };
export type { IPerson, ITip, IState, Actions };