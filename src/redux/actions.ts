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

function resetNameAction(): Actions {
  return {
    type: ActionTypes.RESET_NAME,
  }
}

function showTipAction(bool: boolean): Actions {
  return {
    type: ActionTypes.SHOW_TIP,
    payload: bool,
  }
}

export { setNameAction, submitAction, resetAction, resetNameAction, showTipAction };