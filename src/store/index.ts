import { createStore, combineReducers } from 'redux';
import timerReducer from './timer/timerReducer';
import themeReducer from './theme/themeReducer';


const rootReducer = combineReducers({
  timerReducer,
  themeReducer
})

export const store = createStore(rootReducer);

