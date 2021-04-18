const initialState = {
  isAnswered: false,
  numberOfDeals: null,
  name: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SUBMIT': 
      return {
        ...state,
        isAnswered: true,
        numberOfDeals: action.payload,
      }
    case 'RESET': 
      return {
        ...state,
        isAnswered: false,
        numberOfDeals: null,
      }
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'RESET_NAME':
      return {
        ...state,
        name: null,
        isAnswered: false,
      }
    default:
      return state;
  }
}