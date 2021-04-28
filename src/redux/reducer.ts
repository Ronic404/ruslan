import { IState, ActionTypes, Actions } from '../types/forRedux';

const initialState: IState = {
  isAnswered: false,
  numberOfDeals: null,
  name: null,
}

export type RootState = ReturnType<typeof reducer>;

export default function reducer(state: IState = initialState, action: Actions): IState {
  switch (action.type) {
    case ActionTypes.SUBMIT: 
      return {
        ...state,
        isAnswered: true,
        numberOfDeals: action.payload,
      }
    case ActionTypes.RESET: 
      return {
        ...state,
        isAnswered: false,
        numberOfDeals: null,
      }
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      }
    case ActionTypes.RESET_NAME:
      return {
        ...state,
        name: null,
        isAnswered: false,
      }
    default:
      return state;
  }
}