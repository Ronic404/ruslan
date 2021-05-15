import { combineReducers } from 'redux';

import person from './personReducer';
import tip from './tipReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  person,
  tip,
});

export default rootReducer;