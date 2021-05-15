import personReducer from '../redux/reducers/personReducer';
import { submitAction, resetAction, setNameAction, resetNameAction } from '../redux/actions';

const state = {
  isAnswered: false,
  numberOfDeals: null,
  name: null,
}

// ---------------------------------------

describe('reducer should', () => {
  test('change numberOfDeals', () => {
    const newState = personReducer(state, submitAction(5));
    expect(newState).toEqual({
      ...state,
      isAnswered: true,
      numberOfDeals: 5,
    });
  });

  test('reset numberOfDeals', () => {
    const newState = personReducer(state, resetAction());
    expect(newState).toEqual({
      ...state,
      isAnswered: false,
      numberOfDeals: null,
    });
  });

  test('set name', () => {
    const newState = personReducer(state, setNameAction('ruslan'));
    expect(newState).toEqual({
      ...state,
      name: 'ruslan',
    });
  });

  test('reset name', () => {
    const newState = personReducer(state, resetNameAction());
    expect(newState).toEqual({
      ...state,
      name: null,
    });
  });
});
