const SUBMIT = 'SUBMIT';
const RESET = 'RESET';
const SET_NAME = 'SET_NAME';
const RESET_NAME = 'RESET_NAME';

function setNameAction(name) {
  return {
    type: SET_NAME,
    payload: name,
  }
}

function submitAction(deals) {
  return {
    type: SUBMIT,
    payload: deals,
  }
}

function resetAction() {
  return {
    type: RESET,
  }
}

function resetName() {
  return {
    type: RESET_NAME,
  }
}

export { setNameAction, submitAction, resetAction, resetName };