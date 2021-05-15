import { Actions, ActionTypes, ITip } from '../../types/forRedux';

const initialState: ITip = {
  showTip: false,
}

export default function tip(state: ITip = initialState, action: Actions): ITip {
  switch (action.type) {
    case ActionTypes.SHOW_TIP:
      return {
        ...state,
        showTip: action.payload,
      }
    default:
      return state;
  }
}