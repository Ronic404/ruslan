import { ActionTypes, Actions } from '../types/forRedux';

function setNameAction(name: string): Actions {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  }
}

function submitAction(deals: number): Actions {
  return {
    type: ActionTypes.SUBMIT,
    payload: deals,
  }
}

function resetAction(): Actions {
  return {
    type: ActionTypes.RESET,
  }
}

function resetName(): Actions {
  return {
    type: ActionTypes.RESET_NAME,
  }
}

export { setNameAction, submitAction, resetAction, resetName };