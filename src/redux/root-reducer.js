import { combineReducers } from "redux";
import phonesReducers from './reducer';

const rootReducer = combineReducers({
  data: phonesReducers
});

export default rootReducer;