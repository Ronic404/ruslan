import reducer from '../redux/reducer';
import { submitAction, resetAction } from '../redux/actions';

const state = {
  isAnswered: false,
  numberOfDeals: null,
  name: null,
}

const state_2 = {
  isAnswered: true,
  numberOfDeals: 10,
  name: null,
}

// ---------------------------------------

describe('reducer should', () => {
  test('change numberOfDeals', () => {
    const newState = reducer(state, submitAction(5));
    expect(newState).toEqual({
      ...state,
      isAnswered: true,
      numberOfDeals: 5,
    });
  });

  test('reset state', () => {
    const resetState = reducer(state_2, resetAction());
    expect(resetState).toEqual({
      ...state,
      isAnswered: false,
      numberOfDeals: null,
    });
  });
});
