import { IPerson, ActionTypes, Actions } from '../../types/forRedux';

const initialState: IPerson = {
  isAnswered: false,
  numberOfDeals: null,
  name: null,
}

export default function person(state: any = initialState, action: Actions): IPerson {
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