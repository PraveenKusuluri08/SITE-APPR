import { combineReducers } from "redux";
import formBBuilder from './FormBBuilder'

const rootReducer = combineReducers({
  formBBuilder: formBBuilder,
});

export default rootReducer;