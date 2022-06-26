import { combineReducers } from 'redux';

import gameReducer from './game/reducer';
import commonReducer from './common/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  common: commonReducer,
});

export default rootReducer;
