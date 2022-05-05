import { combineReducers } from "redux";
import formABuilder from './FormABuilder'

const rootReducer = combineReducers({
  formABuilder: formABuilder,
});

export default rootReducer;