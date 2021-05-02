import { combineReducers } from 'redux';

import person from './person';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  person,
});

export default rootReducer;