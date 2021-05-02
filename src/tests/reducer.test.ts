import reducer from '../redux/reducers/person';
import { submitAction, resetAction, setNameAction, resetNameAction } from '../redux/actions';

const state = {
  isAnswered: false,
  numberOfDeals: null,
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

  test('reset numberOfDeals', () => {
    const newState = reducer(state, resetAction());
    expect(newState).toEqual({
      ...state,
      isAnswered: false,
      numberOfDeals: null,
    });
  });

  test('set name', () => {
    const newState = reducer(state, setNameAction('ruslan'));
    expect(newState).toEqual({
      ...state,
      name: 'ruslan',
    });
  });

  test('reset name', () => {
    const newState = reducer(state, resetNameAction());
    expect(newState).toEqual({
      ...state,
      name: null,
    });
  });
});
